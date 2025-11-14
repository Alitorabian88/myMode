import {createContext, useContext, useState} from "react";
import {Appearance} from 'react-native';
import type {ThemeContextType, ThemeProviderProps, ThemeType} from "@/interfaces/theme";


// init the context with default values
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {
    },
});

// create the provider component and functionality
export const ThemeProvider = ({children}: ThemeProviderProps) => {

    const systemTheme = Appearance.getColorScheme() as ThemeType;

    const [theme, setTheme] = useState<ThemeType>(systemTheme ?? 'light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    // provide the context values to children components
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}
// create a custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);