import {createContext, useState, useMemo} from 'react';
import {createTheme} from "@mui/material";

export const tokens = (mode: string) => ({
    ...(mode === "dark" ? {
        // TODO: Разбить на разные компоненты тему и цвета, а еще узнать, откуда лучше получать цвета с бека или хранить во фронте?
        primary: {
            DEFAULT: '#000000',
        },
        secondary: {
            DEFAULT: '#7C7C7C'
        },
        black: {
            DEFAULT: '#000000',
        },
        white: {
            DEFAULT: '#FFFFFF',
            100: '#F7F7F7'
        },
        gray: {
            DEFAULT: '#3C3C3C'
        },
        blue: {
            DEFAULT: "#4169E1",
            incitingText: "#1900D5"
        },
        accentMain: '#0F0E0E',
        borderColor: '#3C3C3C'
    } : {

        primary: {
            DEFAULT: '#FFFFFF',
            600: '#F7F7F7'
        },
        secondary: {
            DEFAULT: '#7C7C7C'
        },
        black: {
            DEFAULT: '#000000',
        },
        white: {
            DEFAULT: '#FFFFFF',
            100: '#F7F7F7',
        },
        blue: {
            DEFAULT: "#4169E1",
            incitingText: "#1900D5"
        },
        gray: {
            DEFAULT: '#3C3C3C'
        },
        accentMain: '#F7F7F7',
        borderColor: '#D1D1D1'
    })
})
export const themeSettings: any = (mode: string) => {
    const colors = tokens(mode)
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                primary: {
                    main: colors.primary.DEFAULT
                },
                secondary: {
                    main: colors.secondary.DEFAULT
                },
                neutral: {
                    main: colors.black.DEFAULT,
                    light: colors.white[100]
                },
                buttonActive: {
                    main: colors.blue.DEFAULT
                }
            } : {
                primary: {
                    main: colors.primary.DEFAULT
                },
                secondary: {
                    main: colors.secondary.DEFAULT
                },
                neutral: {
                    main: colors.black.DEFAULT,
                    light: colors.white[100]
            },
                buttonActive: {
                    main: colors.gray.DEFAULT
                }
            })
        },
        typography: {
            fontFamily:["Poppins", 'sans-serif'].join(','),
            fontSize: 14,
            fontWeight: 500,
            h1: {
                fontFamily:["Poppins", 'sans-serif'].join(','),
                fontSize: 28,
                fontWeight: 600
            },
            h2: {
                fontFamily:["Poppins", 'sans-serif'].join(','),
                fontSize: 20,
                fontWeight: 600
            },
            h3: {
                fontFamily:["Poppins", 'sans-serif'].join(','),
                fontSize: 18,
                fontWeight: 600
            },
            p: {
                fontFamily:["Poppins", 'sans-serif'].join(','),
                fontSize: 14,
                fontWeight: 600
            }
        }
    }
}

export const ColorModeContext = createContext<{toggleColorMode: () => void}>({
    toggleColorMode: () => {}
})

export const useMode  = () => {
    const [mode, setMode] = useState('light')
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => setMode((prev) => (prev === "light"? 'dark' : 'light'))

        }), [])

    const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode])
    return [theme, colorMode]
}

