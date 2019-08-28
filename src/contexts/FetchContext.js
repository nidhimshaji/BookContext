import React, { useState, createContext, useEffect } from "react";

export const FetchContext = createContext();

const FetchContextProvider = props => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let getRequest = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    let postRequest = () => async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRequest();
    postRequest();
  }, []);

  return (
    <FetchContext.Provider value={{ isloading, getRequest, postRequest }}>
      {props.children}
    </FetchContext.Provider>
  );
};
export default FetchContextProvider;

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
