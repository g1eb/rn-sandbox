/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Menu from './src/views/Menu'

class sandbox extends Component {
  render() {
    return (
      <Menu />
    );
  }
}

AppRegistry.registerComponent('sandbox', () => sandbox)
