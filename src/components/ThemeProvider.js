import React, { useEffect, useState } from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"

import ThemeContext from "./ThemeContext"
import {
  useTheme,
  getTheme,
  CUBIC_BEZIER_TRANSITION,
  BACKGROUND_TRANSITION_TIME,
} from "../utils/theme"
import PRISM_THEME_LIGHT from "../styles/prism-theme-light"
import PRISM_THEME_DARK from "../styles/prism-theme-dark"

const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme()
  const currentTheme = getTheme(theme)
  const darkTheme = getTheme("dark")
  const { color } = currentTheme
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={currentTheme}>
        <Global
          styles={css({
            html: {
              scrollbarColor:
                theme === "dark"
                  ? `${darkTheme.muted} ${darkTheme.background}`
                  : "auto",
            },
            body: {
              // for rubber band effect in Chrome on MacOS
              // and outside the scaled div with background color
              backgroundColor: currentTheme.background,
            },
          })}
        />
        <Global
          // set syntax highlighting theme
          styles={css(theme === "dark" ? PRISM_THEME_DARK : PRISM_THEME_LIGHT)}
        />
        <div
          css={{
            color,
            transition: CUBIC_BEZIER_TRANSITION,
            zIndex: 1,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {children}
        </div>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}
