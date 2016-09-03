'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Button from 'sandbox/src/components/Button'

class Swipe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.boxText}>Swipe me</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    height: 200,
    width: 200,
    margin: 50,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: 'whitesmoke',
    fontSize: 24,
    fontFamily: 'Helvetica',
  }
})

module.exports = Swipe
