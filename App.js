import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen.js';
import MemoDetailScreen from './src/screens/MemoDetailScreen.js';
import MemoEditScreen from './src/screens/MemoEditScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import SignupScreen from './src/screens/SignupScreen.js';
import Appbar from './src/components/Appbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});
