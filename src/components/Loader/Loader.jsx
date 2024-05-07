import React from 'react'
import "./loader.scss"
import { HashLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="loader">
      <HashLoader color="#36d7b7" />
    </div>
  );
}

export default Loader