import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [color, setColor] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  });

  const toggleTheme = () => {
    setColor({ ...color, isLightTheme: !color.isLightTheme });
  };
  console.log("color", color);
  return (
    <ThemeContext.Provider value={{ ...color, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;

// class ThemeContextProvider extends Component {
//   state = {
//     isLightTheme: true,
//     light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
//     dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
//   };
//   render() {
//     return (
//       <ThemeContext.Provider value={{ ...this.state }}>
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }
