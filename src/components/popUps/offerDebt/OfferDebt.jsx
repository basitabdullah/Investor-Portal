import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./offerDebt.scss";
import toast from "react-hot-toast";
import img from "../../../assets/dashboard/rec1.png";
import img2 from "../../../assets/dashboard/rec2.png";
import img3 from "../../../assets/dashboard/rec3.png";
import upper1 from "../../../assets/dashboard/uperRec1.png";
import upper2 from "../../../assets/dashboard/upperRec2.png";
const OfferDebt = (props) => {
  const [thanksMsg, setThanksMsg] = useState(false);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");


  const handleSubmit =(input,input2,input3)=>{
 (input && input2 && input3 ) === ""
   ? toast.error("Can't Keep the Inputs Empty!")
   : setThanksMsg(true);

  }


  
  return (
    <>
      <div className="debtModal">
        <div className="debtModalContainer">
          <IoMdClose onClick={() => props.setterFunc(false)} />
          <div className="form">
            <h5>Amount(%)</h5>
            <input
              type="text"
              placeholder="Amount you want to invest"
              onChange={(e) => setInput(e.target.value)}
            />
            <h5>Rate Of Interest</h5>
            <input
              type="text"
              placeholder="Rate of interest"
              onChange={(e) => setInput2(e.target.value)}
            />
            <h5>Time Duration in Years </h5>
            <input
              type="number"
              placeholder="Set a time duration in years"
              onChange={(e) => setInput3(e.target.value)}
            />

            <button onClick={() => handleSubmit(input, input2, input3)}>
              Submit
            </button>
          </div>
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

export default OfferDebt;
