'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  ListView,
  View,
} from 'react-native'

import Container from 'sandbox/src/components/Container'
import StatusBar from 'sandbox/src/components/StatusBar'
import Header from 'sandbox/src/components/Header'
import Button from 'sandbox/src/components/Button'

const states = [
  {state: 'state1', name: 'State 1', subStates: [], backgroundColor: 'azure' },
  {state: 'state2', name: 'State 2', subStates: [], backgroundColor: 'lightcyan' },
  {state: 'state3', name: 'State 3', subStates: [], backgroundColor: 'lightblue' },
  {state: 'state4', name: 'State 4', subStates: [], backgroundColor: 'skyblue' },
  {state: 'state5', name: 'State 5', subStates: [], backgroundColor: 'steelblue' },
]

class Navigateception extends Component {

  constructor(props) {
    super(props)

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      menuItems: ds.cloneWithRows(states)
    }
  }

  render() {
    return (
      <Container style={[styles.container, {backgroundColor: this.props.item.backgroundColor}]}>
        <StatusBar style={{backgroundColor: 'whitesmoke'}} />
        <Header title={this.props.item.name} subtitle={this.props.item.desc} />
        <ListView dataSource={this.state.menuItems} renderRow={(item) => {return this._renderMenuItem(item)}} />
      </Container>
    )
  }

  _renderMenuItem(item) {
    return (
      <View style={styles.button}>
        <Button
          text={item.name}
          backgroundColor={item.backgroundColor}
          activeColor="rgba(245, 245, 245, 0.5)"
          onPress={(item) => console.log(item)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
  }
})

module.exports = Navigateception
