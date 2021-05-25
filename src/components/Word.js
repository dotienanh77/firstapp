/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

export default class Word extends Component {
  renderWord = (word) => {
    const {filterMode} = this.props;
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
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.words}
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
