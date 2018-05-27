import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} value="Hi" multiline />
        <CircleButton color="white" >
          { '\uf00c' }
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  memoEditInput: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default MemoEditScreen;
