'use strict'

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import Container from 'sandbox/src/components/Container'
import Router from 'sandbox/src/utils/Router'

class Navigateception extends Component {

  render() {
    return (
      <Container style={[styles.container, {backgroundColor: this.props.item.backgroundColor}]}>
        <Router initialRoute={{state: 'menu'}} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
  },
})

module.exports = Navigateception
