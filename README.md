# babel-browserify-react
... or babrowseract.

> Proof of using ES6 &amp; CommonJS modules co-existing in development with trans(pilers | forms) to deploy for browsers of today

ESLint support
===
[ESLint](http://eslint.org/)

The __.eslintrc__ files requires the following attributes in order to allow for development with ES6 Modules without warning:

```
{
  "env": {
    "es6": true
  },
  "ecmaFeatures": {
    "modules": true
  }
}
```

The following attribute is required to work with [React JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) declaration without warning:

```
{
  "ecmaFeatures": {
    "jsx": true
  }
}
```

Modules
===
Modules are defined using the ES6 `import` syntax. When built, they are run through the proper transforms and transpilers to generate code that can be delivered to browsers of today without ES6 support.

ES6 Modules
---
Using [Babel](https://babeljs.io/), modules can be defined using the [ES6 syntax](https://babeljs.io/docs/usage/modules/). Upon build of the files for deployment, the modules are run through the __Babel__ transpiler to generate CommonJS compatible modules.

Browserify
---
[browserify](http://browserify.org/) is used in the bundling process of modules for the browser because the default output module syntax for __Babel__ is CommonJS.

ReactJS
===
[ReactJS](https://facebook.github.io/react/index.html) is used for the component library. It is currently loaded in as a `require`'d library and bundled with [browserify](http://browserify.org/) in the build.

### Articles
* [http://blog.risingstack.com/the-react-way-getting-started-tutorial/](http://blog.risingstack.com/the-react-way-getting-started-tutorial/)

Flux
---
A basic [Flux](https://facebook.github.io/flux/docs/todo-list.html) design is used as a base "architecture" for the application. The term "architecture" is used in quotes as it is a design that is adhered to rather than a suite of libraries that the application is forced to conform to.
