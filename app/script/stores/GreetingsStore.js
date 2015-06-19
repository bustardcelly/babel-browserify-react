'use strict';

import EventEmitter from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import {actions as GreetingsActions, GreetingsActionEnum} from '../actions/GreetingsActions.js';

const GreetingsStoreEventEnum = {
  CHANGE: 'greetingsStoreChangeEvent'
};

class GreetingsStore extends EventEmitter {

  constructor() {
    super();
    this.greetings = [];
  }

  init() {
    return GreetingsActions.all();
  }

  all() {
    return this.greetings;
  }

  addChangeListener(callback) {
    this.on(GreetingsStoreEventEnum.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(GreetingsStoreEventEnum.CHANGE, callback);
  }


}

var store = new GreetingsStore();
Dispatcher.register(function(payload) {

  var action = payload.action;
  switch(action.type) {
    case GreetingsActionEnum.GET_ALL:
      store.greetings = action.list;
      store.emit(GreetingsStoreEventEnum.CHANGE);
      break;
  }

});

// To import ->
// import { store as GreetingsStore, GreetingsStoreEventEnum } from 'stores/GreetingsStore';
export { store, GreetingsStoreEventEnum };

