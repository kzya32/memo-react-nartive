import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>Movie Lecture</Text>
          </View>
        </View>

        <View style={styles.movieList}>
          <View style={styles.movieListItem}>
            <Text style={styles.movieTitle}>ムービーのタイトル</Text>
            <Text style={styles.movieDate}>5/20/2018</Text>
          </View>
          <View style={styles.movieListItem}>
            <Text style={styles.movieTitle}>ムービーのタイトル</Text>
            <Text style={styles.movieDate}>5/20/2018</Text>
          </View>
        </View>

        <View style={styles.movieAddButton}>
          <Text style={styles.movieAddButtonTitle}>+</Text>
        </View>
      </View>

      // <BodyText>BodyText!</BodyText>

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
  movieList: {
    flex: 1,
    width: '100%',
  },
  movieListItem: {
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  movieTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  movieDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    padding: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    alignItems: 'center',
  },
  movieAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 48 * 0.5,
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  movieAddButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
});
