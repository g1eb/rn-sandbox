'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
} from 'react-native'

import Container from '../components/Container'
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import Button from '../components/Button'

class Menu extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar style={{backgroundColor: 'whitesmoke'}} />
        <Header title="Menu" />
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
