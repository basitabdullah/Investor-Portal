import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "../../pages/offerInvestment/topbar.scss";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";
const TopBar = (props) => {
  const [viewDrop, setViewDrop] = useState(false);
  const { data, loading } = props;
  return (
    <div className="topbar">
      <div className="link">
        <Link to={"/financial-projections"}>
          <BsArrowLeft />
        </Link>
        <h1>Back</h1>
      </div>

      <div className="savedSelect" onClick={() => setViewDrop(!viewDrop)}>
        <p>Saved Plans</p>
        <IoIosArrowDropdownCircle />
      </div>
      {viewDrop &&
        (loading ? (
          <p>Loading...</p>
        ) : (
          <div className="dropDown">
            <Link to={data.savedName ? "/saved-plan/1" : "/offer-investment"}>
              {data.savedName || "No Saved Plans!"}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TopBar;
