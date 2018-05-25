import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>ムービーのタイトル</Text>
          <Text style={styles.memoDate}>5/20/2018</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>ムービータイトル</Text>
          <Text style={styles.memoDate}>5/20/2018</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    flex: 1,
    width: '100%',
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});
export default MemoList;
