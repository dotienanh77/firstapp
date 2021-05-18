/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 1, en: 'One', vn: 'Một', isMemorized: false},
        {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
        {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
        {id: 4, en: 'Four', vn: 'Bốn', isMemorized: true},
        {id: 5, en: 'Five', vn: 'Năm', isMemorized: false},
      ],
      shouldShowForm: false,
      txtEn: '',
      txtVn: '',
      filterMode: null,
    };
  }
  renderWord = (word) => {
    const {filterMode} = this.state;
    if (filterMode === 'Show_Forgot' && !word.isMemorized) {
      return null;
    } else if (filterMode === 'Show_Memorized' && word.isMemorized) {
      return null;
    } else {
      return (
        <View style={styles.containerWord} key={word.id}>
          <View style={styles.containerText}>
            <Text style={styles.textStyleEn}>{word.en}</Text>
            <Text style={styles.textStyleVn}>
              {word.isMemorized ? '----' : word.vn}
            </Text>
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity
              onPress={() => {
                const newWords = this.state.words.map((item) => {
                  if (item.id === word.id) {
                    return {...item, isMemorized: !item.isMemorized};
                  }
                  return item;
                });
                this.setState({words: newWords});
              }}
              style={{
                ...styles.touchForgot,
                backgroundColor: word.isMemorized ? 'green' : 'red',
              }}>
              <Text style={styles.textTouchForgot}>
                {word.isMemorized ? 'Forgot' : 'Memorized'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                const newWords = this.state.words.filter((item) => {
                  if (item.id === word.id) {
                    return false;
                  }
                  return true;
                });
                this.setState({words: newWords});
              }}
              style={styles.touchRemove}>
              <Text style={styles.textTouchRemove}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };
  toggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  addWord = () => {
    const {txtEn, txtVn} = this.state;
    if (txtEn.length <= 0 || txtVn.length <= 0) {
      alert('Bạn chưa nhập đủ thông tin');
      return;
    }
    const newWord = {
      id: Math.random(),
      en: txtEn,
      vn: txtVn,
      isMemorized: false,
    };
    const newWords = this.state.words.map((word) => {
      return {...word};
    });
    newWords.push(newWord);
    this.txtEnRef.clear();
    this.txtVnRef.clear();
    this.setState({words: newWords, txtEn: '', txtVn: ''});
  };
  renderForm = () => {
    if (this.state.shouldShowForm) {
      return (
        <View>
          <View style={styles.containerTextInput}>
            <TextInput
              ref={(refs) => (this.txtEnRef = refs)}
              placeholder="English"
              style={styles.textInput}
              onChangeText={(text) => {
                this.state.txtEn = text;
              }}
            />
            <TextInput
              ref={(refs) => (this.txtVnRef = refs)}
              onChangeText={(text) => {
                this.state.txtVn = text;
              }}
              placeholder="Vietnamese"
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerTouchableForm}>
            <TouchableOpacity
              onPress={this.addWord}
              style={styles.touchableAddword}>
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
          <Text style={styles.textOpenForm}>+</Text>
        </TouchableOpacity>
      );
    }
  };
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
    return (
      <SafeAreaView style={styles.container}>
        {this.renderForm()}
        {this.renderFilter()}
        {this.state.words.map((word) => {
          return this.renderWord(word);
        })}
      </SafeAreaView>
    );
  }
}
// ismemorized : Forgot - màu xanh
// isMemorized == false : Memorized - màu đỏ

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerWord: {
    marginTop: '2%',
    justifyContent: 'center',
    height: '13%',
    flexDirection: 'column',
    backgroundColor: 'gainsboro',
    elevation: 5,
    borderRadius: 5,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerTouchable: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyleEn: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  textStyleVn: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  touchForgot: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  touchRemove: {
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  textTouchForgot: {
    fontSize: 14,
    color: 'white',
  },
  textTouchRemove: {
    fontSize: 14,
    color: 'black',
  },
  containerTextInput: {
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
  },
  textInput: {
    borderWidth: 1,
    height: 60,
    fontSize: 20,
    paddingHorizontal: 10,
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
  containerTouchableForm: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
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
