import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./InvestEquity.scss";
import toast from "react-hot-toast";
import img from "../../../assets/dashboard/rec1.png"
import img2 from "../../../assets/dashboard/rec2.png"
import img3 from "../../../assets/dashboard/rec3.png";
import upper1 from "../../../assets/dashboard/uperRec1.png";
import upper2 from "../../../assets/dashboard/upperRec2.png";
const InvestEquity = (props) => {
  const [thanksMsg, setThanksMsg] = useState(false);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  
  const handSubmit = (input,input2)=>{
    (input&&input2) === "" ? toast.error("Can't Keep the Inputs Empty!") : setThanksMsg(true)
  }
  return (
    <>
      <div className="investModal">
        <div className="investModalContainer">
          <IoMdClose onClick={() => props.setterFunc(false)} />
          <form className="form">
            I am willing to contribute{" "}
            <input
              type="text"
              placeholder="Enter Amount"
              onChange={(e) => setInput(e.target.value)}
            />{" "}
            in exchange for{" "}
            <input
              type="number"
              placeholder="Percentage"
              onChange={(e) => setInput2(e.target.value)}
            />
            % of equity.
          </form>

          <button onClick={() => handSubmit(input, input2)}>Submit</button>
        </div>
      </div>

      {thanksMsg && (
        <div className="thanksModal">
          <div className="thanksModalContainer">
            <IoMdClose onClick={() => props.setterFunc(false)} />
            <img className="lowerImg" src={img} alt="" />
            <img className="lowerImg" src={img2} alt="" />
            <img className="lowerImg" src={img3} alt="" />
            <img className="upperImg" src={upper1} alt="" />
            <img className="upperImg" src={upper2} alt="" />

            <div className="text">
              <p className="upper">
                Thank you for proposing <span>BIDCHEMZ.COM</span>{" "}
              </p>
              <p className="lower">
                Our team will get in touch with you for further discussion
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InvestEquity;
