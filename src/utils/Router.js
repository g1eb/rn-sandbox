'use strict'

import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'

import Menu from 'sandbox/src/views/Menu'
import Detail from 'sandbox/src/views/Detail'
import Navigateception from 'sandbox/src/views/Navigateception'
import Error from 'sandbox/src/views/Error'

const menuItems = [
  { state: 'detail', type: 'counter', name: 'Counter', desc: 'use buttons to add/subtract', icon: 'plus-one', stateTransition: Navigator.SceneConfigs.FloatFromRight, backgroundColor: 'cornsilk' },
  { state: 'detail', type: 'scroll', name: 'Scroll', desc: 'infinitely', icon: 'list', stateTransition: Navigator.SceneConfigs.FloatFromLeft, backgroundColor: 'blanchedalmond' },
  { state: 'detail', type: '', name: 'State 3', desc: 'add description here..', icon: 'build', stateTransition: Navigator.SceneConfigs.FloatFromBottom, backgroundColor: 'peachpuff' },
  { state: 'detail', type: '', name: 'State 4', desc: 'add description here..', icon: 'question-answer', stateTransition: Navigator.SceneConfigs.VerticalUpSwipeJump, backgroundColor: 'antiquewhite' },
  { state: 'detail', type: '', name: 'State 5', desc: 'add description here..', icon: 'pets', stateTransition: Navigator.SceneConfigs.VerticalDownSwipeJump, backgroundColor: 'bisque' },
  { state: 'navigateception', name: 'Navigateception', desc: 'we have to go deeper!', icon: 'compare-arrows', stateTransition: Navigator.SceneConfigs.FloatFromRight, backgroundColor: 'oldlace' },
]

export default class Router extends Component {

  renderScene(route, navigator) {
    var navigatorProps = { navigator }
    switch (route.state) {
      case 'menu':
        return <Menu items={menuItems} {...navigatorProps} />
        break
      case 'detail':
        return <Detail item={route.item} {...navigatorProps} />
        break
      case 'navigateception':
        return <Navigateception item={route.item} {...navigatorProps} />
        break
      default:
        return <Error {...navigatorProps} />
        break
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
