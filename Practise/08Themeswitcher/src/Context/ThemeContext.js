import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    thememode: "light",
    lightmode: () => {},
    darkmode: () => {}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useThemeContext ()  {
    return useContext(ThemeContext)
}