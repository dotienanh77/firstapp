/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Child from './Child';
export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // dinh nghia thuoc tinh thay doi
  onIncrement = () => {
    this.setState({count: this.state.count + 1});
  };
  onDecrement = () => {
    this.setState({count: this.state.count - 1});
  };
  onReset = () => {
    this.setState({count: 0});
  };
  render() {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{alignSelf: 'center', fontSize: 30}}>
          Count : {this.state.count}
        </Text>
        <Child
          // truyen tham so vao child de xu li (truyen vao props)
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onReset={this.onReset}
        />
      </View>
    );
  }
}
