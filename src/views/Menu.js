'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Button from '../components/Button';

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Menu
        </Text>
        <View style={styles.button}>
          <Button backgroundColor="whitesmoke" activeColor="rgba(245, 245, 245, 0.5)" text="state 1" />
        </View>
        <View style={styles.button}>
          <Button backgroundColor="whitesmoke" activeColor="rgba(245, 245, 245, 0.5)" text="state 2" />
        </View>
        <View style={styles.button}>
          <Button backgroundColor="whitesmoke" activeColor="rgba(245, 245, 245, 0.5)" text="state 3" />
        </View>
        <View style={styles.button}>
          <Button backgroundColor="whitesmoke" activeColor="rgba(245, 245, 245, 0.5)" text="state 4" />
        </View>
        <View style={styles.button}>
          <Button backgroundColor="whitesmoke" activeColor="rgba(245, 245, 245, 0.5)" text="state 5" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
  },
  title: {
    height: 150,
    fontSize: 52,
    color: '#333',
    fontFamily: 'Helvetica',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
  }
})

module.exports = Menu
