/* window.js
 *
 * Copyright (C) 2017 Patrick Griffis
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

var EidisiWindow = GObject.registerClass({
    GTypeName: 'EidisiWindow',
    Template: 'resource:///org/gnome/Eidisi/window.ui',
    InternalChildren: ['label'],
}, class EidisiWindow extends Gtk.ApplicationWindow {
    _init(application) {
        super._init({
            application,
        });
    }
});

