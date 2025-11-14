// Packages
import { createContext, useContext, useState } from "react";
import { Appearance } from 'react-native';
// Types
import type { ThemeContextType, ThemeProviderProps, ThemeType } from "@/interfaces/theme";

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {
    },
});

export const ThemeProvider = ({children}: ThemeProviderProps) => {

    const systemTheme = Appearance.getColorScheme() as ThemeType;

    const [theme, setTheme] = useState<ThemeType>(systemTheme ?? 'light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}
export const useTheme = () => useContext(ThemeContext);