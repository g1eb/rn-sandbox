'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Button from 'sandbox/src/components/Button'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  _incrementCounter () {
    this.setState({
      counter: this.state.counter+=1
    });
  }

  _decrementCounter () {
    this.setState({
      counter: this.state.counter-=1
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{this.state.counter}</Text>
        <View style={styles.actions}>
          <Button
            text="-1"
            backgroundColor="whitesmoke"
            activeColor="rgba(245, 245, 245, 0.5)"
            onPress={() => this._decrementCounter()} />
          <Button
            text="+1"
            backgroundColor="whitesmoke"
            activeColor="rgba(245, 245, 245, 0.5)"
            onPress={() => this._incrementCounter()} />
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
  counter: {
    height: 150,
    fontSize: 100,
    fontFamily: 'Helvetica',
  },
  actions: {
    height: 50,
    marginBottom: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
})

module.exports = Counter
