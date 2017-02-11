# OpenSaturday-Frontend
[![Build Status](https://travis-ci.org/DiogenesPolanco/OpenSaturdayFrontend.svg?branch=master)](https://travis-ci.org/DiogenesPolanco/OpenSaturdayFrontend)
**Tecnologias y metodologias utilizadas:**

* [Angular 1.6.1](https://github.com/angular/code.angularjs.org/tree/master/1.6.1) is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC...
* [TypeScript](https://github.com/Microsoft/TypeScript) TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
* [GulpJs](http://gulpjs.com/) is a task/build runner for development. It allows you to do a lot of stuff within your development workflow. You can compile sass files, uglify and compress js files and much more. The kicker for gulp is that its a streaming build system which doesn't write temp files.
* [SPA](https://johnpapa.net/spa/) Single Page Applications (SPA) are built on expanding reach via the browser, reducing round tripping, and enhancing User Experience (UX)
 
**Tienes que instalar las dependencias:**
* [Git](https://git-scm.com/downloads)
* [NodeJs](https://nodejs.org/en/download/)
* [TypeScript](https://www.typescriptlang.org/#download-links)
* [Bower](https://bower.io/#install-bower)
* [GulpJs](http://gulpjs.com/)
* [VSCode](https://code.visualstudio.com/download)

1) Si no tiene Node.js instalado o tiene una versión inferior, ve a [nodejs.org](https://nodejs.org) y haga clic en el botón de instalación grande verde.

3) Instala `typings`, `gulp` y `bower` globalmente.

```sh
npm install -g typings gulp bower
```

Esto te permite ejecutar `typings`,`gulp` y` bower` desde la consola.

4)  Instala las dependencias locales con `npm`, `typings` y` bower`.

```sh
cd  opensaturdayfrontend && npm install && typings install && bower install
```
 
### Flujo de desarrollo

#### Build "dist" folder
```sh
gulp build
```

#### RUN
```sh
gulp serve
```

#### DEPLOY
```sh
npm install now && cd dist && now
```
