/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/Home'

type Props ={

}

type State = {

}

export default class App extends Component {
  constructor(props:Props) {
    super(props)
    this.state = {

    }
  }
  state:State
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

