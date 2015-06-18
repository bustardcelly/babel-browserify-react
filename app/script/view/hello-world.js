'use strict';

import React from 'react';
import { store as GreetingsStore, GreetingsStoreEventEnum } from '../stores/GreetingsStore';

export default class HelloWorld extends React.Component {

  constructor() {
    super();
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
    GreetingsStore.addChangeListener(this._onChange);
    GreetingsStore.init();
  }

  componentWillUnmount() {
    GreetingsStore.removeChangeListener(this._onChange);
  }

  render() {
    var rows = this.state.greetings.map(function(item) {
      return <li>{item}</li>;
    });
    return <ul>{rows}</ul>;
  }

}

