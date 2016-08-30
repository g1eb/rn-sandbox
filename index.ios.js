'use strict'

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Router from 'sandbox/src/utils/Router'

class sandbox extends Component {
  render() {
    return <Router initialRoute={{state: 'menu'}} />
  }
}

AppRegistry.registerComponent('sandbox', () => sandbox)
