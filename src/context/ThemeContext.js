import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = "dark-theme";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = () => {
    // console.log(e.target.value);
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else { 
      setTheme("dark-theme");
    }
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
