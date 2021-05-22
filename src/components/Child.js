/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
export default class Child extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={() => this.props.onIncrement()} // child lay tham so de xu li
          style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
          <Text style={{fontSize: 20, color: 'white'}}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onDecrement()}
          style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
          <Text style={{fontSize: 20, color: 'white'}}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onReset()}
          style={{padding: 10, backgroundColor: 'black', borderRadius: 5}}>
          <Text style={{fontSize: 20, color: 'white'}}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
