import "./global.css";
import {StatusBar, View} from 'react-native';
import {useState} from "react";
import {makeStyles} from './App.styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Switch } from './src/components/ui/switch';

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
    return (
        <View style={styles.container}>
            <Switch
                size="large"
                value={isDarkMode}
                onValueChange={(isOn: boolean) => setIsDarkMode(isOn)}
                trackColor={{ false: '#FF7A30', true: '#FF7A30' }}
                thumbColor={isDarkMode ? '#E9E3DF' : '#000000'}
            />
        </View>
    );
}

export default App;
