/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'

import Menu from './src/views/Menu'

class sandbox extends Component {

  renderScene(route, navigator) {
    var navigatorProps = { navigator }
    switch (route.id) {
      case "Menu":
        return <Menu {...navigatorProps} />
    }
  }

  render() {
    return (
      <Navigator initialRoute={{ id: "Menu" }} renderScene={this.renderScene} />
    )
  }
}

AppRegistry.registerComponent('sandbox', () => sandbox)
