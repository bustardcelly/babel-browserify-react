'use strict';

// import FluxDispatcher from 'flux-react-dispatcher';
import { Dispatcher as FluxDispatcher } from 'flux';

class Dispatcher extends FluxDispatcher {

  handleAsyncAction(action) {
    this.dispatch({
      source: 'ASYNC_ACTION',
      action: action
    });
  }

}

export default new Dispatcher();
