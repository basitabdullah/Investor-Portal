import Sidebar from "../mainSidebar/Sidebar";

import "../../styles/ContainerLineChart.scss";
import "../../styles/flexContainer.scss";
import LineChart from "./LineChart";
import { SlMagnifierAdd, SlMagnifierRemove } from "react-icons/sl";
import SecondaryNav from "../SecondNav/SecondaryNav";

const ContainerLineChart = (props) => {
  const { title } = props;
  return (
    <div className="flexContainer">
      <Sidebar />
      <div className="topContainer">
        <SecondaryNav title={title} />
        <div className="calenderContainer">
          <div className="calender">
            <input type="date" />

            <h5>TO</h5>

            <input type="date" />
          </div>
          <div className="zoom">
            <SlMagnifierAdd />
            <span>90%</span>
            <span className="reset">Reset</span>
            <SlMagnifierRemove />
          </div>
        </div>

        <div className="chart">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default ContainerLineChart;
