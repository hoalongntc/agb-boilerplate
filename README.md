Angular-Gulp-Browserify boilerplate
===================================

`agb-boilerplate` is designed to make life easy by providing a basic framework with which to kickstart AngularJS projects.

### How to start
```
npm install -g gulp # Ignore if gulp is already installed

git clone https://github.com/hoalongntc/agb-boilerplate.git
cd agb-boilerplate
npm install
bower install
gulp        # For development

gulp build  # For production use
```

### App structure
```
agb-boilerplate/
  |- app/
  |  |- assets/
  |  |  |- <static files like images, fonts...>
  |  |- scripts/ <app logic code>
  |  |  |- controllers <angular controllers>
  |  |  |- directives <angular directives>
  |  |  |- services <angular services>
  |  |  |- libs <others js libraries>
  |  |  |- main.ng.js <main angular file>
  |  |- styles/
  |  |  |- less/ <app less files>
  |  |  |- libs/ <others css, less libraries>
  |  |  |- main.less <main less file>
  |- views/ <angular html view templates>
  |- vendor/ <bower libraries>
  |- .bowerrc
  |- .jshintrc
  |- bower.json
  |- gulpfile.js
  |- package.json
```
