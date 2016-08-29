'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import Button from 'sandbox/src/components/Button'

class Scroll extends Component {

  constructor(props) {
    super(props)
    this.state = {
      arr: Array.apply(null, new Array(25)).map((e, i) => 'item ' + (i+1))
    }
  }

  _renderRow (item, id) {
    return (
      <TouchableOpacity style={styles.listRow} key={id}>
        <Text style={styles.listRowText}>{item}</Text>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.list}
          scrollEventThrottle={250}
          onEndReachedThreshold={1500}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          {this.state.arr.map(this._renderRow)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
  },
  listRow: {
    height: 50,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listRowText: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    color: '#333',
  },
})

module.exports = Scroll
