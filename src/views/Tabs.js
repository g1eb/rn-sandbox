'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  TabBarIOS,
} from 'react-native'

import Container from 'sandbox/src/components/Container'
import Router from 'sandbox/src/utils/Router'

class Tabs extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedTab: 'tab1'
    }
  }

  render() {
    return (
      <Container style={[styles.container, {backgroundColor: this.props.item.backgroundColor}]}>
        <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
            title='Tab 1'
            selected={this.state.selectedTab === 'tab1'}
            onPress={() => this.setState({selectedTab: 'tab1'})}>
            <Router initialRoute={{state: 'menu'}} />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Tab 2'
            selected={this.state.selectedTab === 'tab2'}
            onPress={() => this.setState({selectedTab: 'tab2'})}>
            <Router initialRoute={{state: 'menu'}} />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Tab 3'
            selected={this.state.selectedTab === 'tab3'}
            onPress={() => this.setState({selectedTab: 'tab3'})}>
            <Router initialRoute={{state: 'menu'}} />
          </TabBarIOS.Item>
        </TabBarIOS>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
  },
})

module.exports = Tabs
