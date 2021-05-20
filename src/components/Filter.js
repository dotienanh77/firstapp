/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Filter extends Component {
  render() {
    let value = null;
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          onValueChange={(value) => {
            this.value = value;
          }}
          onDonePress={() => {
            alert(this.value);
          }}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    padding: 20,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  pickerStyle: {
    padding: 50,
  },
});
