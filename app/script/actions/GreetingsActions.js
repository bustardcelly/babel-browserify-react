'use strict';

import wwgfetch from 'whatwg-fetch';
import Dispatcher from '../dispatcher/Dispatcher';

const GreetingsActionEnum = {
  GET_ALL: 'greetingsActionGetAll'
};

class GreetingsActions {

  all() {
    return fetch('http://jsonplaceholder.typicode.com/posts/1/comments')
            .then(function(response) {
              return response.json();
            }).then(function(json) {
              console.log('parsed json', json);
              var payload = json.map(function(item) {
                return item.body;
              });
              Dispatcher.handleAsyncAction({
                type: GreetingsActionEnum.GET_ALL,
                list: payload
              });

            }).catch(function(ex) {
              console.log('parsing failed', ex);
            });
  }

}

var actions = new GreetingsActions();

export { actions, GreetingsActionEnum };
