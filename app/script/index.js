/* global document*/
'use strict';

var React = require('react');

// CommonJS import/require
// var HelloComponent = require('./view/hello-world');
// OR
// ES6 import
import HelloComponent from './view/hello-world';

React.render(<HelloComponent/>, document.getElementById('greeting'));

