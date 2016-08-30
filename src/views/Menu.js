'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  ListView,
} from 'react-native'

import Container from 'sandbox/src/components/Container'
import StatusBar from 'sandbox/src/components/StatusBar'
import Header from 'sandbox/src/components/Header'
import Button from 'sandbox/src/components/Button'

class Menu extends Component {

  constructor(props) {
    super(props)

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      menuItems: ds.cloneWithRows(props.items)
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar style={{backgroundColor: 'whitesmoke'}} />
        <Header title="Menu" />
        <ListView dataSource={this.state.menuItems} renderRow={(item) => {return this._renderMenuItem(item)}} />
      </Container>
    )
  }

  _renderMenuItem(item) {
    return (
      <View style={styles.button}>
        <Button
          text={item.name}
          icon={item.icon}
          iconAlign="right"
          backgroundColor={item.backgroundColor}
          activeColor="rgba(245, 245, 245, 0.5)"
          onPress={() => this._navigate(item)} />
      </View>
    )
  }

  _navigate (item) {
    this.props.navigator.push({
      state: item.state,
      sceneConfigs: item.stateTransition,
      item: item,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'coral',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
  }
})

module.exports = Menu
