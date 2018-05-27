import { StackNavigator } from 'react-navigation';

import MemoListScreen from './src/screens/MemoListScreen.js';
import MemoDetailScreen from './src/screens/MemoDetailScreen.js';
import MemoEditScreen from './src/screens/MemoEditScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import SignupScreen from './src/screens/SignupScreen.js';

const App = StackNavigator({
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
}, {
  navigationOptions: {
    headerTitle: 'Memo App',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
