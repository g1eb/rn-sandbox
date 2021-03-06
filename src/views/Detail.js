'use strict'

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Container from 'sandbox/src/components/Container'
import StatusBar from 'sandbox/src/components/StatusBar'
import Header from 'sandbox/src/components/Header'
import Button from 'sandbox/src/components/Button'
import Counter from 'sandbox/src/components/Counter'
import Scroll from 'sandbox/src/components/Scroll'
import Swipe from 'sandbox/src/components/Swipe'

class Detail extends Component {

  _renderContent () {
    if ( !!this.props.item.type ) {
      switch (this.props.item.type) {
        case 'counter':
          return <Counter />
        case 'scroll':
          return <Scroll />
        case 'swipe':
          return <Swipe />
        default:
          return null
      }
    } else {
      return (
        <View style={{flex: 1}} />
      )
    }
  }

  render() {
    return (
      <Container style={[styles.container, {backgroundColor: this.props.item.backgroundColor}]}>
        <StatusBar style={{backgroundColor: 'whitesmoke'}} />
        <Header title={this.props.item.name} subtitle={this.props.item.desc} />
        {this._renderContent()}
        <View style={styles.navbar}>
          <Button text="Back" icon="chevron-left" iconAlign="left"
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
