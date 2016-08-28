'use strict'

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Container from '../components/Container'
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import Button from '../components/Button'

class Detail extends Component {
  render() {
    return (
      <Container style={[styles.container, {backgroundColor: this.props.item.backgroundColor}]}>
        <StatusBar style={{backgroundColor: 'whitesmoke'}} />
        <Header title={this.props.item.name} subtitle={this.props.item.desc} />
        <View style={{flex: 1}} />
        <View style={styles.navbar}>
          <Button text="Back"
            backgroundColor="whitesmoke"
            activeColor="rgba(245, 245, 245, 0.5)"
            onPress={() => this.props.navigator.pop()} />
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
  },
  navbar: {
    height: 50,
    marginBottom: 50,
  }
})

module.exports = Detail
