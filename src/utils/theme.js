import React, { useState, useEffect } from "react"

export const COLOR_PRIMARY = "salmon"

export const useTheme = () => {
  const storedTheme =
    typeof window != "undefined" && window.localStorage.getItem("them")
  const [theme, setTheme] = React.useState(storedTheme)
  const changeTheme = () => {
    setTheme(currenTheme => {
      return currenTheme === "day" ? "night" : "day"
    })
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme)
    }
  }, [theme])
  return [theme, changeTheme]
}

export const getTheme = theme =>
  theme === "light"
    ? {
        background: "#fff",
        color: "hsla(0, 0%, 0%, 0.8)",
        secondary: "hsla(0, 0%, 0%, 0.7)",
        muted: "hsla(0, 0%, 0%, 0.6)",
        borderColor: "#eee",
        borderHoverColor: "transparent",
      }
    : {
        background: "#121212",
        color: "hsla(0, 0%, 100%, 0.87)",
        secondary: "hsla(0, 0%, 100%, 0.75)",
        muted: "hsla(0, 0%, 100%, 0.60)",
        borderColor: "hsla(0, 0%, 100%, 0.60)",
        borderHoverColor: COLOR_PRIMARY,
      }
