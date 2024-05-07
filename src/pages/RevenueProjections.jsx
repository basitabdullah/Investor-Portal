import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../components/mainSidebar/Sidebar";
import RevenuePieChart from "../components/revenue-exp-pie/RevenuePieChart";
import "../styles/flexContainer.scss";
import "../styles/revenueProjections.scss";
import SecondaryNav from "../components/SecondNav/SecondaryNav";
import CircularProgBar from "../components/CircularProgBar";
import QuarterChart from "../components/quaterChart/QuarterChart";
import { get, ref } from "firebase/database";
import database from "../firebase";
import Loader from "../components/Loader/Loader";

const RevenueProjections = () => {
  const [sales, setSales] = useState(true);
  const [logistic, setLogistic] = useState();
  const [fintech, setFintech] = useState();
  const [subs, setSubs] = useState();
  const [viewDetails, setViewDetails] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const handleLogistic = () => {
    setLogistic(true);
    setFintech(false);
    setSales(false);
    setSubs(false);
  };
  const handleSales = () => {
    setLogistic(false);
    setFintech(false);
    setSales(true);
    setSubs(false);
  };
  const handleFintech = () => {
    setLogistic(false);
    setFintech(true);
    setSales(false);
    setSubs(false);
  };
  const handleSubs = () => {
    setLogistic(false);
    setFintech(false);
    setSales(false);
    setSubs(true);
  };
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
  }, [setData]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);


  return (
    <div className="flexContainer">
      <Sidebar />
      <div
        className="p-5 w-full "
        style={{
          overflow: "auto",
          paddingBottom: "30px",
        }}
      >
        <SecondaryNav />
        {loading ? (
          <Loader />
        ) : (
          <div className="mt-1">
            <h2 className="font-bold text-2xl">Revenue Projections </h2>
            <p>
              Click one by one for better understanding and get complete
              information
            </p>

            <div className="flex">
              <div className="mt-10 inline:block gap-4">
                <button
                  className="bg-[#FD6060] text-white text-center px-5 py-1 rounded-lg mb-5"
                  onClick={handleSales}
                >
                  Performance Selling
                </button>
                <br />
                <button
                  className="bg-[#783DF4] text-white text-center px-5 py-1 rounded-lg mb-5  "
                  onClick={handleLogistic}
                >
                  Logistic
                </button>
                <br />
                <button
                  className="bg-[#FFD600] text-white text-center px-5 py-1 rounded-lg mb-5  "
                  onClick={handleFintech}
                >
                  Fintech
                </button>
                <br />
                <button
                  className="bg-[#00B1D8] text-white text-center px-5 py-1 rounded-lg  "
                  onClick={handleSubs}
                >
                  Subscription
                </button>
              </div>

              <div className="revenuePieChart">
                <RevenuePieChart
                  data={data}
                  PerformanceSelling={
                    data &&
                    data[2].RevenueModel.PerformanceSelling.revenue.YEAR4.toFixed(
                      2
                    )
                  }
                  Logistic={
                    data &&
                    data[2].RevenueModel.LogisticPartners.revenue.YEAR4.toFixed(
                      2
                    )
                  }
                  Fintech={
                    data &&
                    data[2].RevenueModel.FintechPartners.revenue.YEAR4.toFixed(
                      2
                    )
                  }
                  Subscription={
                    data &&
                    data[2].RevenueModel.ADSubscription.revenue.YEAR4.toFixed(2)
                  }
                />
                <div className="progressContainer">
                  <button
                    className="viewBtn"
                    onClick={() => setViewDetails(!viewDetails)}
                  >
                    View Quarters
                  </button>
                  <div className="progressBar">
                    {logistic && (
                      <>
                        <CircularProgBar
                          color="rgba(120, 61, 244, 1)"
                          year="Ist Year"
                          value={`${data[2]?.RevenueModel.LogisticPartners.revenue.YEAR1.toFixed(
                            1
                          )} lac`}
                          percentage={
                            (data[2]?.RevenueModel.LogisticPartners.revenue
                              .YEAR1 /
                              200) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="2nd Year"
                          value={`${data[2]?.RevenueModel.LogisticPartners.revenue.YEAR2.toFixed(
                            1
                          )} lac`}
                          color="rgba(120, 61, 244, 1)"
                          percentage={
                            (data[2]?.RevenueModel.LogisticPartners.revenue
                              .YEAR2 /
                              200) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="3rd Year"
                          value={`${data[2]?.RevenueModel.LogisticPartners.revenue.YEAR3.toFixed(
                            1
                          )} lac`}
                          color="rgba(120, 61, 244, 1)"
                          percentage={
                            (data[2]?.RevenueModel.LogisticPartners.revenue
                              .YEAR3 /
                              200) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="4th Year"
                          value={`${data[2]?.RevenueModel.LogisticPartners.revenue.YEAR4.toFixed(
                            1
                          )} lac`}
                          color="rgba(120, 61, 244, 1)"
                          percentage={
                            (data[2]?.RevenueModel.LogisticPartners.revenue
                              .YEAR4 /
                              200) *
                            100
                          }
                        />
                      </>
                    )}

                    {sales && (
                      <>
                        <CircularProgBar
                          year="Ist Year"
                          value={`${data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR1.toFixed(
                            1
                          )} lac`}
                          color="rgba(253, 96, 96, 1)"
                          percentage={
                            (data[2]?.RevenueModel.PerformanceSelling.revenue
                              .YEAR1 /
                              2000) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="2nd Year"
                          value={`${data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR2.toFixed(
                            1
                          )} lac`}
                          color="rgba(253, 96, 96, 1)"
                          percentage={
                            (data[2]?.RevenueModel.PerformanceSelling.revenue
                              .YEAR2 /
                              2000) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="3rd Year"
                          color="rgba(253, 96, 96, 1)"
                          value={`${data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR3.toFixed(
                            1
                          )} lac`}
                          percentage={
                            (data[2]?.RevenueModel.PerformanceSelling.revenue
                              .YEAR3 /
                              2000) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="4th Year"
                          color="rgba(253, 96, 96, 1)"
                          value={`${data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR4.toFixed(
                            1
                          )} lac`}
                          percentage={
                            (data[2]?.RevenueModel.PerformanceSelling.revenue
                              .YEAR4 /
                              2000) *
                            100
                          }
                        />
                      </>
                    )}

                    {fintech && (
                      <>
                        <CircularProgBar
                          year="Ist Year"
                          value={`${data[2]?.RevenueModel.FintechPartners.revenue.YEAR1.toFixed(
                            1
                          )} lac`}
                          color="rgba(255, 214, 0, 1)"
                          percentage={
                            (data[2]?.RevenueModel.FintechPartners.revenue
                              .YEAR1 /
                              200) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="2nd Year"
                          value={`${data[2]?.RevenueModel.FintechPartners.revenue.YEAR2.toFixed(
                            1
                          )} lac`}
                          color="rgba(255, 214, 0, 1)"
                          percentage={
                            (data[2]?.RevenueModel.FintechPartners.revenue
                              .YEAR2 /
                              200) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="3rd Year"
                          value={`${data[2]?.RevenueModel.FintechPartners.revenue.YEAR3.toFixed(
                            1
                          )} lac`}
                          color="rgba(255, 214, 0, 1)"
                          percentage={
                            (data[2]?.RevenueModel.FintechPartners.revenue
                              .YEAR3 /
                              200) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="4th Year"
                          color="rgba(255, 214, 0, 1)"
                          value={`${data[2]?.RevenueModel.FintechPartners.revenue.YEAR4.toFixed(
                            1
                          )} lac`}
                          percentage={
                            (data[2]?.RevenueModel.FintechPartners.revenue
                              .YEAR4 /
                              200) *
                            100
                          }
                        />
                      </>
                    )}

                    {subs && (
                      <>
                        <CircularProgBar
                          year="Ist Year"
                          value={`${data[2]?.RevenueModel.ADSubscription.revenue.YEAR1.toFixed(
                            1
                          )} lac`}
                          color="rgba(0, 177, 216, 1)"
                          percentage={
                            (data[2]?.RevenueModel.ADSubscription.revenue
                              .YEAR1 /
                              2600) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="2nd Year"
                          value={`${data[2]?.RevenueModel.ADSubscription.revenue.YEAR2.toFixed(
                            1
                          )} lac`}
                          color="rgba(0, 177, 216, 1)"
                          percentage={
                            (data[2]?.RevenueModel.ADSubscription.revenue
                              .YEAR2 /
                              2600) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="3rd Year"
                          color="rgba(0, 177, 216, 1)"
                          value={`${data[2]?.RevenueModel.ADSubscription.revenue.YEAR3.toFixed(
                            1
                          )} lac`}
                          percentage={
                            (data[2]?.RevenueModel.ADSubscription.revenue
                              .YEAR3 /
                              2600) *
                            100
                          }
                        />
                        <CircularProgBar
                          year="4th Year"
                          color="rgba(0, 177, 216, 1)"
                          value={`${data[2]?.RevenueModel.ADSubscription.revenue.YEAR4.toFixed(
                            1
                          )} lac`}
                          percentage={
                            (data[2]?.RevenueModel.ADSubscription.revenue
                              .YEAR4 /
                              2600) *
                            100
                          }
                        />
                      </>
                    )}
                  </div>
                </div>

                {viewDetails && sales && (
                  <div className="quaterCharts">
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y1Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y1Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y1Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y1Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y2Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y2Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y2Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y2Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y3Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y3Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y3Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y3Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y4Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y4Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y4Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.PerformanceSelling.revenue.Y4Q4.toFixed(
                        1
                      )} lac`}
                    />
                  </div>
                )}

                {viewDetails && logistic && (
                  <div className="quaterCharts">
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y1Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y1Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y1Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y1Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y2Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y2Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y2Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y2Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y3Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y3Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y3Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y3Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y4Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y4Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y4Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.LogisticPartners.revenue.Y4Q4.toFixed(
                        1
                      )} lac`}
                    />
                  </div>
                )}

                {viewDetails && fintech && (
                  <div className="quaterCharts">
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.FintechPartners.revenue.Y1Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.FintechPartners.revenue.Y1Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.FintechPartners.revenue.Y1Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.FintechPartners.revenue.Y1Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.FintechPartners.revenue.Y2Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.FintechPartners.revenue.Y2Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.FintechPartners.revenue.Y2Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.FintechPartners.revenue.Y2Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.FintechPartners.revenue.Y3Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.FintechPartners.revenue.Y3Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.FintechPartners.revenue.Y3Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.FintechPartners.revenue.Y3Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.FintechPartners.revenue.Y4Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.FintechPartners.revenue.Y4Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.FintechPartners.revenue.Y4Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.FintechPartners.revenue.Y4Q4.toFixed(
                        1
                      )} lac`}
                    />
                  </div>
                )}

                {viewDetails && subs && (
                  <div className="quaterCharts">
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.ADSubscription.revenue.Y1Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.ADSubscription.revenue.Y1Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.ADSubscription.revenue.Y1Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.ADSubscription.revenue.Y1Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.ADSubscription.revenue.Y2Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.ADSubscription.revenue.Y2Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.ADSubscription.revenue.Y2Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.ADSubscription.revenue.Y2Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.ADSubscription.revenue.Y3Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.ADSubscription.revenue.Y3Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.ADSubscription.revenue.Y3Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.ADSubscription.revenue.Y3Q4.toFixed(
                        1
                      )} lac`}
                    />
                    <QuarterChart
                      amt1={`${data[2]?.RevenueModel.ADSubscription.revenue.Y4Q1.toFixed(
                        1
                      )} lac`}
                      amt2={`${data[2]?.RevenueModel.ADSubscription.revenue.Y4Q2.toFixed(
                        1
                      )} lac`}
                      amt3={`${data[2]?.RevenueModel.ADSubscription.revenue.Y4Q3.toFixed(
                        1
                      )} lac`}
                      amt4={`${data[2]?.RevenueModel.ADSubscription.revenue.Y4Q4.toFixed(
                        1
                      )} lac`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevenueProjections;
