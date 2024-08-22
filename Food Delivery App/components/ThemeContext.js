import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        backgroundColor: 'darkorange',
        textColor: 'darkbrown',
        buttonColor: 'green',
        borderColor: 'darkbrown'
    });

    const changeTheme = (newTheme) => setTheme(newTheme);

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
