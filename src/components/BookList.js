import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li>
      </ul>
      <button onClick={toggleTheme}>ToggleTheme</button>
    </div>
  );
};
export default BookList;
// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark, toggleTheme } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{ color: theme.syntax, background: theme.bg }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>the way of kings</li>
//           <li style={{ background: theme.ui }}>the name of the wind</li>
//           <li style={{ background: theme.ui }}>the final empire</li>
//         </ul>
//         <button onClick={toggleTheme}>ToggleTheme</button>
//       </div>
//     );
//   }
// }
