/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowForm: true, // dieu kien dong/ mo form
    };
  }
  toggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  renderForm = () => {
    if (this.state.shouldShowForm) {
      return (
        <View>
          <View style={styles.containerTextInput}>
            <TextInput
              style={styles.textInput}
              // secureTextEntry={true} - che noi dung
              placeholder="English"
            />
            <TextInput placeholder="Vietnamese" style={styles.textInput} />
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity style={styles.touchableAddword}>
              <Text style={styles.textTouchable}>Add word</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.toggleForm}
              style={styles.touchableCancel}>
              <Text style={styles.textTouchable}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={this.toggleForm}
          style={styles.buttonOpenForm}>
          <Text style={styles.textOpenForm}> + </Text>
        </TouchableOpacity>
      );
    }
  };

  render() {
    return this.renderForm();
  }
}

const styles = StyleSheet.create({
  containerTextInput: {
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  textInput: {
    borderWidth: 1,
    height: 60,
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  touchableAddword: {
    backgroundColor: '#218838',
    padding: 15,
    borderRadius: 10,
  },
  textTouchable: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  touchableCancel: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  buttonOpenForm: {
    width: '100%',
    height: 50,
    backgroundColor: '#45B157',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOpenForm: {
    color: 'white',
    fontSize: 30,
  },
  containerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});
