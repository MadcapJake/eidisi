pkgdatadir = join_paths(get_option('datadir'), meson.project_name())
gnome = import('gnome')

src_res = gnome.compile_resources('org.gnome.Eidisi.src',
  'org.gnome.Eidisi.src.gresource.xml',
  source_dir: '../src',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

data_res = gnome.compile_resources('org.gnome.Eidisi.data',
  'org.gnome.Eidisi.data.gresource.xml',
  source_dir: '../src',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').path())
bin_conf.set('PACKAGE_VERSION', meson.project_version())
bin_conf.set('PACKAGE_NAME', meson.project_name())
bin_conf.set('prefix', get_option('prefix'))
bin_conf.set('libdir', join_paths(get_option('prefix'), get_option('libdir')))
bin_conf.set('datadir', join_paths(get_option('prefix'), get_option('datadir')))

configure_file(
  input: 'org.gnome.Eidisi.in',
  output: 'org.gnome.Eidisi',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)
