import "./global.css";
import {StatusBar, View, Switch} from 'react-native';
import {useState} from "react";
import {makeStyles} from './App.styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <SafeAreaProvider>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <AppContent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        </SafeAreaProvider>
    );
}

function AppContent({isDarkMode, setIsDarkMode}: { isDarkMode: boolean; setIsDarkMode: (v: boolean) => void }) {
    const styles = makeStyles(isDarkMode);
    const size: 'small' | 'medium' | 'large' = 'large';
    const scaleMap = { small: 0.9, medium: 1.1, large: 1.3 } as const;
    const scale = scaleMap[size];

    return (
        <View style={styles.container}>
            <Switch
                          value={isDarkMode}
                          onValueChange={(isOn: boolean) => setIsDarkMode(isOn)}
                          trackColor={{ false: '#31363F', true: '#FF7A30' }}
                          thumbColor={isDarkMode ? '#E9E3DF' : '#E9E3DF'}
                          style={{ transform: [{ scaleX: scale }, { scaleY: scale }] }}
                          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            />
        </View>
    );
}

export default App;
