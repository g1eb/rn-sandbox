/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'

import Menu from './src/views/Menu'
import Detail from './src/views/Detail'
import Error from './src/views/Error'

class sandbox extends Component {

  renderScene(route, navigator) {
    var navigatorProps = { navigator }
    switch (route.id) {
      case 'menu':
        return <Menu {...navigatorProps} />
        break
      case 'detail':
        return <Detail item={route.item} {...navigatorProps} />
        break
      default:
        return <Error {...navigatorProps} />
        break
    }
  }

  render() {
    return (
      <Navigator initialRoute={{ id: 'menu' }} renderScene={this.renderScene} />
    )
  }
}

AppRegistry.registerComponent('sandbox', () => sandbox)
