import React, { useState } from "react";
import "../../pages/Revenue-Expense/revYearly.scss";
import RevenuePieChart from "../../components/revenue-exp-pie/RevenuePieChart";
import CircularProgBar from "../../components/CircularProgBar";
import QuarterChart from "../../components/quaterChart/QuarterChart";

const RevYearly = (props) => {
  const [sales, setSales] = useState(true);
  const [logistic, setLogistic] = useState();
  const [fintech, setFintech] = useState();
  const [subs, setSubs] = useState();
  const [viewDetails, setViewDetails] = useState(false);

 const {data} = props


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

  return (
    <div className="item">
      <div className="itemContainer">
        <div className="itemMap">
          <button className="items one" onClick={handleSales}>
            Performance Selling
          </button>
          <button className="items two" onClick={handleLogistic}>
            Logistic
          </button>
          <button className="items three" onClick={handleFintech}>
            Fintech
          </button>
          <button className="items four" onClick={handleSubs}>
            Subscription
          </button>
        </div>

        <div className="chart">
          <RevenuePieChart
            PerformanceSelling={
              data &&
              data[2].RevenueModel.PerformanceSelling.revenue.YEAR4.toFixed(2)
            }
            Logistic={
              data &&
              data[2].RevenueModel.LogisticPartners.revenue.YEAR4.toFixed(2)
            }
            Fintech={
              data &&
              data[2].RevenueModel.FintechPartners.revenue.YEAR4.toFixed(2)
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
                      (data[2]?.RevenueModel.LogisticPartners.revenue.YEAR1 /
                        200) *
                      100
                    }
                  />
                  <CircularProgBar
                    year="2nd Year"
                    color="rgba(120, 61, 244, 1)"
                    value={`${data[2]?.RevenueModel.LogisticPartners.revenue.YEAR2.toFixed(
                      1
                    )} lac`}
                    percentage={
                      (data[2]?.RevenueModel.LogisticPartners.revenue.YEAR2 /
                        200) *
                      100
                    }
                  />
                  <CircularProgBar
                    year="3rd Year"
                    color="rgba(120, 61, 244, 1)"
                    value={`${data[2]?.RevenueModel.LogisticPartners.revenue.YEAR3.toFixed(
                      1
                    )} lac`}
                    percentage={
                      (data[2]?.RevenueModel.LogisticPartners.revenue.YEAR3 /
                        200) *
                      100
                    }
                  />
                  <CircularProgBar
                    year="4th Year"
                    color="rgba(120, 61, 244, 1)"
                    value={`${data[2]?.RevenueModel.LogisticPartners.revenue.YEAR4.toFixed(
                      1
                    )} lac`}
                    percentage={
                      (data[2]?.RevenueModel.LogisticPartners.revenue.YEAR4 /
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
                    color="rgba(253, 96, 96, 1)"
                    value={`${data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR1.toFixed(
                      1
                    )} lac`}
                    percentage={
                      (data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR1 /
                        1500) *
                      100
                    }
                  />
                  <CircularProgBar
                    year="2nd Year"
                    color="rgba(253, 96, 96, 1)"
                    value={`${data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR2.toFixed(
                      1
                    )} lac`}
                    percentage={
                      (data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR2 /
                        1500) *
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
                      (data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR3 /
                        1500) *
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
                      (data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR4 /
                        1500) *
                      100
                    }
                  />
                </>
              )}

              {fintech && (
                <>
                  <CircularProgBar
                    year="Ist Year"
                    color="rgba(255, 214, 0, 1)"
                    value={`${data[2]?.RevenueModel.FintechPartners.revenue.YEAR1.toFixed(
                      1
                    )} lac`}
                    percentage={
                      (data[2]?.RevenueModel.FintechPartners.revenue.YEAR1 /
                        200) *
                      100
                    }
                  />
                  <CircularProgBar
                    year="2nd Year"
                    color="rgba(255, 214, 0, 1)"
                    value={`${data[2]?.RevenueModel.FintechPartners.revenue.YEAR2.toFixed(
                      1
                    )} lac`}
                    percentage={
                      (data[2]?.RevenueModel.FintechPartners.revenue.YEAR2 /
                        200) *
                      100
                    }
                  />
                  <CircularProgBar
                    year="3rd Year"
                    color="rgba(255, 214, 0, 1)"
                    value={`${data[2]?.RevenueModel.FintechPartners.revenue.YEAR3.toFixed(
                      1
                    )} lac`}
                    percentage={
                      (data[2]?.RevenueModel.FintechPartners.revenue.YEAR3 /
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
                      (data[2]?.RevenueModel.FintechPartners.revenue.YEAR4 /
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
                    color="rgba(0, 177, 216, 1)"
                    value={`${data[2]?.RevenueModel.ADSubscription.revenue.YEAR1.toFixed(
                      1
                    )} lac`}
                    percentage={
                      (data[2]?.RevenueModel.ADSubscription.revenue.YEAR1 /
                        2600) *
                      100
                    }
                  />
                  <CircularProgBar
                    year="2nd Year"
                    color="rgba(0, 177, 216, 1)"
                    value={`${data[2]?.RevenueModel.ADSubscription.revenue.YEAR2.toFixed(
                      1
                    )} lac`}
                    percentage={
                      (data[2]?.RevenueModel.ADSubscription.revenue.YEAR2 /
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
                      (data[2]?.RevenueModel.ADSubscription.revenue.YEAR3 /
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
                      (data[2]?.RevenueModel.ADSubscription.revenue.YEAR4 /
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
  );
};

export default RevYearly;
