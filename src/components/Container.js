'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
} from 'react-native'

class Container extends Component {
  render () {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  }
})

module.exports = Container
