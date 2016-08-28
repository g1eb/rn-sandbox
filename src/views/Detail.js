'use strict'

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import Container from '../components/Container'
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'

class Detail extends Component {
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
    backgroundColor: 'tomato',
  }
})

module.exports = Detail
