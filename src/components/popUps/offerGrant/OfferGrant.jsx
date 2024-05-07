import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "../../popUps/offerGrant/offerGrant.scss";
import toast from "react-hot-toast";
import img from "../../../assets/dashboard/rec1.png";
import img2 from "../../../assets/dashboard/rec2.png";
import img3 from "../../../assets/dashboard/rec3.png";
import upper1 from "../../../assets/dashboard/uperRec1.png";
import upper2 from "../../../assets/dashboard/upperRec2.png";
const OfferGrant = (props) => {
  const [thanksMsg, setThanksMsg] = useState(false);
  const [input, setInput] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (val) => {
    console.log(val);
    val === ""
      ? toast.error("Can't Keep the Inputs Empty!")
      : setThanksMsg(true);
  };
  return (
    <>
      <div className="offerModal">
        <div className="offerModalContainer">
          <IoMdClose onClick={() => props.setterFunc(false)} />
          <div className="form">
            <h5>Amount</h5>
            <input
              type="text"
              placeholder="Amount you want to give"
              onChange={(e) => setInput(e.target.value)}
            />
            <h5>Payment Method</h5>
            <div className="dropDown">
              <h3> {selectedValue ? selectedValue : "Select An Option"}</h3>
              <select value={selectedValue} onChange={handleChange}>
                <option value="NFT">NFT</option>
                <option value="Check Payment">Check Payment</option>
              </select>
            </div>

            <button onClick={() => handleSubmit(input)}>Submit</button>
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

export default OfferGrant;
