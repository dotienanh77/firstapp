/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import Word from './src/components/Word';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <Filter /> */}
        {/* <Main /> */}
        {/* <Word /> */}
        <Form />
      </SafeAreaView>
    );
  }
}
