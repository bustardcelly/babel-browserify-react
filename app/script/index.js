/* global document*/
'use strict';

import React from 'react';
import HelloComponent from './view/hello-world';

React.render(<HelloComponent/>, document.getElementById('greeting'));

