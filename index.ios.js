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

const menuItems = [
  { id: '1', name: 'State 1', desc: 'add description here..', backgroundColor: 'lightgoldenrodyellow' },
  { id: '2', name: 'State 2', desc: 'add description here..', backgroundColor: 'mistyrose' },
  { id: '3', name: 'State 3', desc: 'add description here..', backgroundColor: 'peachpuff' },
  { id: '4', name: 'State 4', desc: 'add description here..', backgroundColor: 'antiquewhite' },
  { id: '5', name: 'State 5', desc: 'add description here..', backgroundColor: 'bisque' },
]

class sandbox extends Component {

  renderScene(route, navigator) {
    var navigatorProps = { navigator }
    switch (route.id) {
      case 'menu':
        return <Menu items={menuItems} {...navigatorProps} />
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
