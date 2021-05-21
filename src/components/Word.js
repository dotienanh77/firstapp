/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

export default class Word extends Component {
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
    };
  }
  renderWord = (word) => {
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
            style={{
              ...styles.touchForgot,
              backgroundColor: word.isMemorized ? 'green' : 'red',
            }}>
            <Text style={styles.textTouchForgot}>
              {word.isMemorized ? 'Forgot' : 'Memorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchRemove}>
            <Text style={styles.textTouchRemove}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.words}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return this.renderWord(item);
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerWord: {
    marginTop: '2%',
    justifyContent: 'center',
    height: 100,
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
});
