import "./global.css";

import {ThemeProvider} from "@/context/ThemeContext.tsx";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {HomeScreen} from "@/screens";

function App() {

    return (
     <>
         <SafeAreaProvider>
             <HomeScreen/>
         </SafeAreaProvider>
     </>
    );
}


export default App;
