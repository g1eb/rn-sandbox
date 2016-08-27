/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Menu from './src/components/Menu'

class sandbox extends Component {
  render() {
    return (
      <Menu />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
})

AppRegistry.registerComponent('sandbox', () => sandbox)
