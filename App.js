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

        <View style={styles.movielist}>
          <View style={styles.movieListItem}>
            <Text style={styles.movieTitle}>ムービーのタイトル</Text>
            <Text style={styles.movieDate}>5/20/2018</Text>
          </View>
          <View style={styles.movieListItem}>
            <Text style={styles.movieTitle}>ムービーのタイトル</Text>
            <Text style={styles.movieDate}>5/20/2018</Text>
          </View>
        </View>

        <View>
          <Text>+</Text>
        </View>
      </View>

      // <BodyText>BodyText!</BodyText>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  movielist: {
    flex: 1,
    width: '100%',
  },
  movieListItem: {
    padding: 16,
    borderBottomWidth: 1,
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
  },
  appbarTitle: {
    color: '#fff',
    alignItems: 'center',
  },
});
