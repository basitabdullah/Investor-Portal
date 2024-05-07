import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { createContext } from "react";

export const Context = createContext({ data: [] });
const AppWrapper = () => {
  const [data, setData] = useState([]);
  return (
    <Context.Provider
      value={{
        data,
        setData,
      }}
    >
      <App />
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <AppWrapper/>
</React.StrictMode>);
