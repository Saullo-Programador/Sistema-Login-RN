import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider as ThemePorviderStyled } from "styled-components/native";
import { DarkTheme } from "./DarkTheme";
import { LightTheme } from "./lightTheme";


export enum ThemeType {
    light = 'light',
    dark = 'dark'
}

const themes = {
    dark: DarkTheme,
    light: LightTheme,
}

export const ThemeContext = createContext({
    theme: ThemeType.light,
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(ThemeType.light);

    useEffect(() => {
        loadTheme()
    }, []);

    async function loadTheme() {
        const savedTheme = await AsyncStorage.getItem('@theme')
        if(savedTheme && Object.values(ThemeType).includes(savedTheme as ThemeType)){
            setTheme(savedTheme as ThemeType)
        }
    }

    function toggleTheme() {
        let selectTheme;
        if(theme === ThemeType.light){
            selectTheme = ThemeType.dark;
        }else{
            selectTheme = ThemeType.light;
        }

        setTheme(selectTheme)
        AsyncStorage.setItem('@theme', selectTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemePorviderStyled theme={themes[theme]}>
                {children}
            </ThemePorviderStyled>
        </ThemeContext.Provider>
    );
};
