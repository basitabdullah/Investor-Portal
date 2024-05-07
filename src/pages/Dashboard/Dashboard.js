import { Link } from "react-router-dom";
import revenue from "../../assets/dashboard/revenue.png";
import profit from "../../assets/dashboard/profit.png";
import expense from "../../assets/dashboard/expense.png";
import sales from "../../assets/dashboard/sales.png";
import BarChartComponent from "../../charts/BarChartComponent";
import TinyLineChart from "../../charts/TinyLineChart";
import BiaxialLineChart from "../../charts/BiaxialLineChart";
import StackedBarChart from "../../charts/StackedBarChart";
import PieChartComponent from "../../charts/PieChartComponent";
import { IoMdArrowForward } from "react-icons/io";
import Sidebar from "../../components/mainSidebar/Sidebar";
import { TiDownload } from "react-icons/ti";
import "../../styles/flexContainer.scss";
import "../../styles/charts.scss";
import Widget from "../../components/widget/Widget";
import "../Dashboard/dashboard.scss";
import { Context } from "../../index";
import { useCallback, useContext, useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import database from "../../firebase";
import exelfile from "../../assets/excel.xlsx";
import { IoMdClose } from "react-icons/io";
import OfferGrant from "../../components/popUps/offerGrant/OfferGrant";
import InvestEquity from "../../components/popUps/investmentEquity/InvestEquity";
import OfferDebt from "../../components/popUps/offerDebt/OfferDebt";
import Loader from "../../components/Loader/Loader";

const Dashboard = () => {
  const { data, setData } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [offerGrant, setOfferGrant] = useState(false);
  const [offerDebt, setOfferDebtt] = useState(false);
  const [investEquity, setInvestEquity] = useState(false);
  const [loading,setLoading] = useState(true)
 const handleFetchData = useCallback(async () => {
   try {
     const excelDataRef = ref(database, "excelData");
     const snapshot = await get(excelDataRef);
     if (snapshot.exists()) {
       const fetchedData = snapshot.val();
       let dataArray = Object.values(fetchedData);
       setData(dataArray);
       setLoading(false);
     } else {
       console.log("No data available in Firebase");
     }
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 }, [setData, setLoading]);

//  console.log(data);
 useEffect(() => {
   handleFetchData();
 }, [handleFetchData]);

  const downloadExcelFile = () => {
    const excelFilePath = exelfile;
    window.open(excelFilePath);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flexContainer">
          <Sidebar />
          <div className="conatainerDashboard">
            <div className="widgets">
              <div className="secOne">
                <Widget
                  icon={revenue}
                  title="Total Revenue in 4 years (lacs)"
                  amount={`INR ${data[2]?.RevenueModel.YOYBasics.revenue.YEAR4.toFixed(
                    2
                  )}`}
                  clr="linear-gradient(175.91deg, #3073EC 2.87%, rgba(250, 253, 255, 0.42) 247.85%)"
                  color="#3073EC"
                  percent={(
                    (data[2]?.RevenueModel.YOYBasics.revenue.YEAR4 / 4000) *
                    100
                  ).toFixed(1)}
                  path="/total-revenue"
                />
                <Widget
                  icon={expense}
                  title="Total Expense in 4 years (lacs)"
                  amount={`INR ${
                    data[1] && data[1][6] && data[1][6].YEAR4.toFixed(2)
                  }`}
                  clr="linear-gradient(179.12deg, #FD3A90 -9.9%, rgba(253, 253, 253, 0.22) 313.22%)"
                  color="#FD3A90"
                  percent={(
                    (data[1] && data[1][6] && data[1][6].YEAR4 / 4000) * 100
                  ).toFixed(1)}
                  path="/revenue"
                />
              </div>

              <div className="secTwo">
                <Widget
                  icon={profit}
                  title="Total Profit in 4 years (lacs)"
                  amount={`INR ${
                    data[0] && data[0][11] && data[0][11].YEAR4.toFixed(2)
                  }`}
                  clr=" linear-gradient(177.84deg, #EBC351 -10.18%, rgba(255, 254, 253, 0) 489.14%)"
                  color="#EBC351"
                  percent={(
                    (data[0] && data[0][11] && data[0][11].YEAR4 / 4000) * 100
                  ).toFixed(1)}
                  path="/revenue"
                />
                <Widget
                  icon={sales}
                  title="Total Sales in 4 years (lacs)"
                  amount={`INR ${data[3]?.combinedsalesLAKH["Year 4"].toFixed(
                    2
                  )}`}
                  clr="linear-gradient(182.3deg, #00FFC4 -14.59%, rgba(248, 255, 252, 0.17) 242.41%)"
                  color="#00FFC4"
                  percent={(
                    (data[3]?.combinedsalesLAKH["Year 4"] / 4000) *
                    100
                  ).toFixed(1)}
                  path="/total-sales"
                />
              </div>
            </div>

            <div className="chartsContainer">
              <div className="upperCharts">
                <div className="bar">
                  <div className="topBar">
                    <h5>Revenue Projections from Different Sources</h5>
                    <Link to="/revenue-projections">
                      <p>View Details</p>
                    </Link>
                  </div>
                  <BarChartComponent />
                </div>

                <div className="line">
                  <div className="topBar">
                    <h5>GMV (Gross Merchandises Value)</h5>
                    <Link to="/total-revenue">
                      <p>View Details</p>
                    </Link>
                  </div>
                  <TinyLineChart />
                </div>
              </div>

              <div className="lowerCharts">
                <div className="bar">
                  <div className="topBar">
                    <h5>Revenue/Expense /P & L </h5>
                    <Link to="/revenue">
                      <p>View Details</p>
                    </Link>
                  </div>
                  <StackedBarChart />
                </div>
                <div className="line" to="/user-acquisition">
                  <div className="topBar">
                    <h5>User Acquisition Progression </h5>
                    <Link to="/revenue">
                      <p>View Details</p>
                    </Link>
                  </div>
                  <BiaxialLineChart />
                </div>
              </div>

              <div className="pieChart">
                <div className="topBar">
                  <h5>Total Expense</h5>
                  <Link to="/revenue">
                    <p>View Details</p>
                  </Link>
                </div>
                <PieChartComponent />
              </div>

              <div className="investmentConatiner">
                <div className="left">
                  <h1>I Am Interested To Invest</h1>
                  <button onClick={() => setShowModal(true)}>
                    Click Here <IoMdArrowForward />
                  </button>
                </div>
                <div className="right">
                  <h1>Download Report In Table Format</h1>
                  <button onClick={downloadExcelFile}>
                    Download
                    <TiDownload />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {showModal && (
            <div className="modal">
              <div className="modalContainer">
                <IoMdClose onClick={() => setShowModal(false)} />
                <Link to="/offer-investment" className="one">
                  Calculate My ROI
                </Link>
                <button
                  onClick={() => {
                    setShowInvestModal(true);
                    setShowModal(false);
                  }}
                  className="two"
                >
                  Skip This Step
                </button>
              </div>
            </div>
          )}

          {showInvestModal && (
            <div className="InvestModal">
              <div className="investModalContainer">
                <IoMdClose onClick={() => setShowInvestModal(false)} />
                <button className="first" onClick={() => setOfferGrant(true)}>
                  Offer grant
                </button>
                <button
                  className="second"
                  onClick={() => setInvestEquity(true)}
                >
                  Investment against equity
                </button>
                <button className="third" onClick={() => setOfferDebtt(true)}>
                  Offer Debt Financing
                </button>
                <button className="forth">Deferred Investment</button>
              </div>
            </div>
          )}
          {offerGrant && (
            <OfferGrant setterFunc={setOfferGrant} state={offerGrant} />
          )}
          {investEquity && (
            <InvestEquity setterFunc={setInvestEquity} state={investEquity} />
          )}

          {offerDebt && (
            <OfferDebt setterFunc={setOfferDebtt} state={offerDebt} />
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
