import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen.js';
import MemoDetailScreen from './src/screens/MemoDetailScreen.js';
import Appbar from './src/components/Appbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoDetailScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
