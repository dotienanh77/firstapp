/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Filter extends Component {
  renderFilter = () => {
    let selectValue = null;
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          style={{inputAndroid: {color: 'black'}}}
          onValueChange={(value) => {
            if (Platform.OS === 'android') {
              this.setState({filterMode: value});
            }
            selectValue = value;
          }}
          onDonePress={() => {
            this.setState({filterMode: selectValue});
          }}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  };
  render() {
    return this.renderFilter(this.props.filterMode);
  }
}

const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 20,
    marginBottom: 5,
  },
  pickerStyle: {
    padding: 50,
  },
});
