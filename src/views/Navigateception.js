'use strict'

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import Container from 'sandbox/src/components/Container'
import StatusBar from 'sandbox/src/components/StatusBar'
import Header from 'sandbox/src/components/Header'

class Navigateception extends Component {
  render() {
    return (
      <Container style={[styles.container, {backgroundColor: this.props.item.backgroundColor}]}>
        <StatusBar style={{backgroundColor: 'whitesmoke'}} />
        <Header title={this.props.item.name} subtitle={this.props.item.desc} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
  }
})

module.exports = Navigateception
