# babel-browserify-react
... or babrowseract.

> Proof of using ES6 &amp; CommonJS modules co-existing in development with trans(piler | forms) to deploy for browsers of today

es-lint support
===
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

The following attribute is required to work with React JSX declaration without warning:

```
{
  "ecmaFeatures": {
    "jsx": true
  }
}
```
