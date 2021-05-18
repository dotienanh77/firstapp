/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{alignSelf: 'center', fontSize: 30}}>
          Count : {this.state.count}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({count: this.state.count + 1});
            }}
            style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
            <Text style={{fontSize: 20, color: 'white'}}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({count: this.state.count - 1});
            }}
            style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
            <Text style={{fontSize: 20, color: 'white'}}>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({count: 0});
            }}
            style={{padding: 10, backgroundColor: 'yellow', borderRadius: 5}}>
            <Text style={{fontSize: 20, color: 'gray'}}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
