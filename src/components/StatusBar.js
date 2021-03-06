'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
} from 'react-native'

class StatusBar extends Component {
  render () {
    return <View style={[styles.statusBar, this.props.style ]} />
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 20,
    backgroundColor: 'white',
    alignSelf: 'stretch'
  }
})

module.exports = StatusBar
