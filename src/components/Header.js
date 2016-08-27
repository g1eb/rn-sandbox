'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontFamily: 'Helvetica',
    color: '#333',
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'Helvetica',
    color: '#333',
  }
})

module.exports = Header
