const GObject = imports.gi.GObject;
const Soup = imports.gi.Soup;

function wrapPromise(obj, cancellable, asyncName, finishName, ...inArgs) {
    return new Promise((resolve, reject) => {
        let callerStack = new Error().stack
            .split('\n')
            .filter(line => !line.match(/<Promise>|wrapPromise/))
            .join('\n');
        obj[asyncName](...inArgs, cancellable, (obj, res) => {
            try {
                let results = obj[finishName](res);
                resolve(results);
            } catch (e) {
                e.stack += '--- Called from: ---\n' + callerStack;
                reject(e);
            }
        });
    });
}

const _session = new Soup.Session();
async function sendMessage(uri, body) {
    return new Promise((resolve, reject) => {
        let message = Soup.Message.new('POST', uri);
        message.set_request('application/json', Soup.MemoryUse.COPY, JSON.stringify(body));
        _session.queue_message(message, (session, message) => {
            print('Status code: ' + message.status_code);
            let response = JSON.parse(message.response_body_data.get_data());
            resolve(response);
        });
    });
}

var Client = GObject.registerClass({
}, class Client extends GObject.Object {
    _init() {
        super._init();
        this._base_uri = 'https://matrix.org/_matrix/client/r0/';
    }

    async login() {
        let uri = this._base_uri + 'login';
        return sendMessage(uri, {
            type: 'm.login.password',
            user: 'TingPing',
            password: '...',
        })
    }
});
