'use strict'

import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'

import Menu from 'sandbox/src/views/Menu'
import Detail from 'sandbox/src/views/Detail'
import Sidebar from 'sandbox/src/views/Sidebar'
import Tabs from 'sandbox/src/views/Tabs'
import Navigateception from 'sandbox/src/views/Navigateception'
import Error from 'sandbox/src/views/Error'

const menuItems = [
  { state: 'detail', type: 'counter', name: 'Counter', desc: 'use buttons to add/subtract', icon: 'plus-one', stateTransition: Navigator.SceneConfigs.FloatFromRight, backgroundColor: 'cornsilk' },
  { state: 'detail', type: 'scroll', name: 'Scroll', desc: 'infinitely', icon: 'list', stateTransition: Navigator.SceneConfigs.FloatFromLeft, backgroundColor: 'blanchedalmond' },
  { state: 'sidebar', name: 'Sidebar', desc: 'should be a sidebar', icon: 'build', stateTransition: Navigator.SceneConfigs.FloatFromBottom, backgroundColor: 'peachpuff' },
  { state: 'tabs', name: 'Tabs', desc: 'confusing tabs', icon: 'tab', stateTransition: Navigator.SceneConfigs.VerticalUpSwipeJump, backgroundColor: 'antiquewhite' },
  { state: 'empty', type: '', name: 'Empty', desc: 'add description here..', icon: 'pets', stateTransition: Navigator.SceneConfigs.VerticalDownSwipeJump, backgroundColor: 'bisque' },
  { state: 'navigateception', name: 'Navigateception', desc: 'we have to go deeper!', icon: 'compare-arrows', stateTransition: Navigator.SceneConfigs.FloatFromRight, backgroundColor: 'oldlace' },
]

export default class Router extends Component {

  renderScene(route, navigator) {
    var navigatorProps = { navigator }
    switch (route.state) {
      case 'menu':
        return <Menu items={menuItems} {...navigatorProps} />
      case 'detail':
        return <Detail item={route.item} {...navigatorProps} />
      case 'sidebar':
        return <Sidebar item={route.item} {...navigatorProps} />
      case 'tabs':
        return <Tabs item={route.item} {...navigatorProps} />
      case 'navigateception':
        return <Navigateception item={route.item} {...navigatorProps} />
      default:
        return <Error {...navigatorProps} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        renderScene={this.renderScene}
        configureScene={(route) => ({
          ...route.sceneConfigs || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }
}
