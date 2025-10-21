import {StatusBar, Text, useColorScheme, View} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { makeStyles } from './App.styles';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const isDarkMode = useColorScheme() === 'light';
  const styles = makeStyles(isDarkMode);
  return (
    <View style={styles.container}>
     <Text style={styles.title}>myMode</Text>
    </View>
  );
}
export default App;
