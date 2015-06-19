'use strict';

import React from 'react';
import { store as GreetingsStore, GreetingsStoreEventEnum } from '../stores/GreetingsStore';

export default class HelloWorld extends React.Component {

  constructor() {
    super();
    this.changeListener = () => {
      this._onChange();
    };
    this.state = {
      greetings: GreetingsStore.all()
    };
  }

  _onChange() {
    this.setState({
      greetings: GreetingsStore.all()
    });
  }

  componentDidMount() {
    GreetingsStore.addChangeListener(this.changeListener);
    GreetingsStore.init();
  }

  componentWillUnmount() {
    GreetingsStore.removeChangeListener(this.changeListener);
  }

  render() {
    var rows = this.state.greetings.map(function(item, index) {
      var key = ['list-item', index].join('-');
      return <li key={key}>{item}</li>;
    });
    return <ul>{rows}</ul>;
  }

}

