'use strict';

import Dispatcher from '../dispatcher/Dispatcher';

var GreetingsActionEnum = {
  GET_ALL: 'greetingsActionGetAll'
};

class GreetingsActions {

  all() {
    return undefined;
  }

}

var actions = new GreetingsActions();

export { actions, GreetingsActionEnum };
