'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

class Swipe extends Component {

  constructor (props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
    }
  }

  _setPosition (e) {
    this.setState({
      x: this.state.x + (e.nativeEvent.pageX - this.drag.x),
      y: this.state.y + (e.nativeEvent.pageY - this.drag.y)
    });
    this.drag.x = e.nativeEvent.pageX;
    this.drag.y = e.nativeEvent.pageY;
  }

  _resetPosition (e) {
    this.dragging = false;
    this.setState({
      x: 0,
      y: 0,
    })
  }

  _getSwipeStyles () {
    var transform = [{translateX: this.state.x}, {translateY: this.state.y}];

    return {transform: transform};
  }

  _onStartShouldSetResponder (e) {
    this.dragging = true;

    this.drag = {
      x: e.nativeEvent.pageX,
      y: e.nativeEvent.pageY
    }

    return true;
  }

  _onMoveShouldSetResponder (e) {
    return true;
  }

  render () {
    return (
      <View style={styles.container}>
        <View
          onResponderMove={this._setPosition.bind(this)}
          onResponderRelease={this._resetPosition.bind(this)}
          onStartShouldSetResponder={this._onStartShouldSetResponder.bind(this)}
          onMoveShouldSetResponder={this._onMoveShouldSetResponder.bind(this)}
          style={[styles.boxContainer, this._getSwipeStyles()]}>
          <Text style={styles.boxText}>Swipe me</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    height: 200,
    width: 200,
    margin: 50,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: 'whitesmoke',
    fontSize: 24,
    fontFamily: 'Helvetica',
  }
})

module.exports = Swipe
