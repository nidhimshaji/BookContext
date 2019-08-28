import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class Navbar extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {context => {
//           const { isLightTheme, light, dark } = context;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h1>Context App</h1>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }
const Navbar = () => {
  const test = useContext(ThemeContext);
  console.log("test", test);
  const { isLightTheme, light, dark } = { ...test };
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
