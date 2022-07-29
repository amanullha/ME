import { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(true);
    const [bgColor, setBgColor] = useState('bg-[#212428cb]');



    return <ThemeContext.Provider value={{ darkMode, setDarkMode, bgColor, setBgColor }}>{props.children}</ThemeContext.Provider>
}