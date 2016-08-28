'use strict'

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import Container from '../components/Container'
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'

class Error extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar style={{backgroundColor: 'whitesmoke'}} />
        <Header title="Error" subtitle="not implemented" />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
  }
})

module.exports = Error
