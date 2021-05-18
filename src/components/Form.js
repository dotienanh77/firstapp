/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 10}}>
        <Text style={{alignSelfs: 'center', fontSize: 20}}>Man Hinh Form</Text>
        <TextInput
          style={{
            alignSelf: 'stretch',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'red',
            padding: 10,
            fontSize: 15,
          }}
          placeholder="Nhap user name"
        />
      </View>
    );
  }
}
