'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import _ from 'lodash'

class Button extends Component {

  constructor (props) {
    super(props)
    this.state = { active: false }
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.25}
        underlayColor='transparent'
        style={[
          styles.container,
          {backgroundColor: this.state.active ? this.props.activeColor : this.props.backgroundColor}
        ]}
        onHideUnderlay={this._onHideUnderlay.bind(this)}
        onShowUnderlay={this._onShowUnderlay.bind(this)}
        ref={component => this._root = component} {...this.props}>
        <View style={styles.buttonWrapper}>
          <Icon style={[styles.buttonIcon, {color: this.props.color}]} name={this.props.icon} size={25} />
          <View style={{flex: 1}} />
          <Text style={[styles.buttonText, {color: this.props.color}]}>
            {_.capitalize(this.props.text)}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  _onShowUnderlay () {
    this.setState({ active: true })
  }
  _onHideUnderlay () {
    this.setState({ active: false })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    opacity: 0.85,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonIcon: {
    color: '#333',
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
    fontFamily: 'Helvetica',
  }
})

module.exports = Button
