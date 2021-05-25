/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
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
import Form from '../components/Form';
import Filter from '../components/Filter';
import Word from '../components/Word';

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
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Form />
        <Filter filterMode={this.state.filterMode} />
        {/* <Word words={this.state.words} /> */}
        <Word words={this.state.words} filterMode={this.state.filterMode} />
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
