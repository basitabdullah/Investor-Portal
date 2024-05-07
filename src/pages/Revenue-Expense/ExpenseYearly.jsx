import React, { useState } from "react";
import "../../pages/Revenue-Expense/revYearly.scss";
import CircularProgBar from "../../components/CircularProgBar";
import ExpensePieChart from "../../components/expensePieChart/ExpensePieChart";

const ExpenseYearly = (props) => {
  const [sales, setSales] = useState(true);
  const [marketing, setMarketing] = useState();
  const [admin, setAdmin] = useState();
  const [legalFees, setLegalFees] = useState();
  const [office, setOffice] = useState();
  const [it, setIt] = useState();
  const [mecell, setMecell] = useState();
  const [total, setTotal] = useState();

  const handleSales = () => {
    setSales(true);
    setMarketing(false);
    setAdmin(false);
    setLegalFees(false);
    setIt(false);
    setMecell(false);
    setTotal(false);
    setOffice(false);
  };

  const handleMarketing = () => {
    setSales(false);
    setMarketing(true);
    setAdmin(false);
    setLegalFees(false);
    setIt(false);
    setMecell(false);
    setTotal(false);
    setOffice(false);
  };
  const handleAdmin = () => {
    setSales(false);
    setMarketing(false);
    setAdmin(true);
    setLegalFees(false);
    setIt(false);
    setMecell(false);
    setTotal(false);
    setOffice(false);
  };

  const handleLegalFees = () => {
    setSales(false);
    setMarketing(false);
    setAdmin(false);
    setLegalFees(true);
    setIt(false);
    setMecell(false);
    setTotal(false);
    setOffice(false);
  };
  const handleOffice = () => {
    setSales(false);
    setMarketing(false);
    setAdmin(false);
    setLegalFees(false);
    setIt(false);
    setMecell(false);
    setTotal(false);
    setOffice(true);
  };
  const handleIT = () => {
    setSales(false);
    setMarketing(false);
    setAdmin(false);
    setLegalFees(false);
    setIt(true);
    setMecell(false);
    setTotal(false);
    setOffice(false);
  };
  const handleMecell = () => {
    setSales(false);
    setMarketing(false);
    setAdmin(false);
    setLegalFees(false);
    setIt(false);
    setMecell(true);
    setTotal(false);
    setOffice(false);
  };
  const handleTotal = () => {
    setSales(false);
    setMarketing(false);
    setAdmin(false);
    setLegalFees(false);
    setIt(false);
    setMecell(false);
    setTotal(true);
    setOffice(false);
  };
  return (
    <div className="item">
      <div className="itemContainer">
        <div className="itemMap">
          <button className="expenseItems one" onClick={handleSales}>
            Sales
          </button>
          <button className="expenseItems two" onClick={handleMarketing}>
            Marketing
          </button>
          <button className="expenseItems three" onClick={handleAdmin}>
            Admin
          </button>
          <button className="expenseItems four" onClick={handleLegalFees}>
            Legal Fees
          </button>
          <button className="expenseItems five" onClick={handleOffice}>
            Office Space 300 aq ft
          </button>
          <button className="expenseItems six" onClick={handleIT}>
            IT infrastruce
          </button>
          <button className="expenseItems seven" onClick={handleMecell}>
            Miscellaneous
          </button>
          <button className="expenseItems eight" onClick={handleTotal}>
            Total
          </button>
        </div>

        <div className="chart">
          <ExpensePieChart
            marketing={props.data[1][0].YEAR4.toFixed(2)}
            admin={props.data[1][1].YEAR4.toFixed(2)}
            legalFees={props.data[1][2].YEAR4.toFixed(2)}
            office={props.data[1][3].YEAR4.toFixed(2)}
            it={props.data[1][4].YEAR4.toFixed(2)}
            micellenous={props.data[1][5].YEAR4.toFixed(2)}
            total={props.data[1][6].YEAR4.toFixed(2)}
          />
          <div className="progressBar">
            {sales && (
              <>
                <CircularProgBar
                  color="rgba(253, 96, 96, 1)"
                  year="Ist Year"
                  value="0.45 lac"
                  percentage={60}
                />
                <CircularProgBar
                  year="2nd Year"
                  color="rgba(253, 96, 96, 1)"
                  value="0.25 lac"
                  percentage={30}
                />
                <CircularProgBar
                  year="3rd Year"
                  color="rgba(253, 96, 96, 1)"
                  value="0.23 lac"
                  percentage={50}
                />
                <CircularProgBar
                  year="4th Year"
                  color="rgba(253, 96, 96, 1)"
                  value="0.15 lac"
                  percentage={30}
                />
              </>
            )}

            {marketing && (
              <>
                <CircularProgBar
                  color="rgba(108, 255, 56, 1)"
                  year="Ist Year"
                  value={props.data[1][0].YEAR1.toFixed(2)}
                  percentage={(props.data[1][0].YEAR1 / 500) * 100}
                />
                <CircularProgBar
                  year="2nd Year"
                  color="rgba(108, 255, 56, 1)"
                  value={props.data[1][0].YEAR2.toFixed(2)}
                  percentage={(props.data[1][0].YEAR2 / 500) * 100}
                />
                <CircularProgBar
                  year="3rd Year"
                  color="rgba(108, 255, 56, 1)"
                  value={props.data[1][0].YEAR3.toFixed(2)}
                  percentage={(props.data[1][0].YEAR3 / 500) * 100}
                />
                <CircularProgBar
                  year="4th Year"
                  color="rgba(108, 255, 56, 1)"
                  value={props.data[1][0].YEAR4.toFixed(2)}
                  percentage={(props.data[1][0].YEAR4 / 500) * 100}
                />
              </>
            )}

            {admin && (
              <>
                <CircularProgBar
                  color="rgba(30, 185, 251, 1)"
                  year="Ist Year"
                  value={props.data[1][1].YEAR1.toFixed(2)}
                  percentage={(props.data[1][1].YEAR1 / 500) * 100}
                />

                <CircularProgBar
                  year="2nd Year"
                  color="rgba(30, 185, 251, 1)"
                  value={props.data[1][1].YEAR2.toFixed(2)}
                  percentage={(props.data[1][1].YEAR2 / 500) * 100}
                />
                <CircularProgBar
                  year="3rd Year"
                  color="rgba(30, 185, 251, 1)"
                  value={props.data[1][1].YEAR3.toFixed(2)}
                  percentage={(props.data[1][1].YEAR3 / 500) * 100}
                />
                <CircularProgBar
                  year="4th Year"
                  color="rgba(30, 185, 251, 1)"
                  value={props.data[1][1].YEAR4.toFixed(2)}
                  percentage={(props.data[1][1].YEAR4 / 500) * 100}
                />
              </>
            )}

            {legalFees && (
              <>
                <CircularProgBar
                  color="rgba(253, 187, 17, 1)"
                  year="Ist Year"
                  value={props.data[1][2].YEAR1.toFixed(2)}
                  percentage={(props.data[1][2].YEAR1 / 500) * 100}
                />
                <CircularProgBar
                  year="2nd Year"
                  color="rgba(253, 187, 17, 1)"
                  value={props.data[1][2].YEAR2.toFixed(2)}
                  percentage={(props.data[1][2].YEAR2 / 500) * 100}
                />
                <CircularProgBar
                  year="3rd Year"
                  color="rgba(253, 187, 17, 1)"
                  value={props.data[1][2].YEAR3.toFixed(2)}
                  percentage={(props.data[1][2].YEAR3 / 500) * 100}
                />
                <CircularProgBar
                  year="4th Year"
                  color="rgba(253, 187, 17, 1)"
                  value={props.data[1][2].YEAR3.toFixed(2)}
                  percentage={(props.data[1][2].YEAR3 / 500) * 100}
                />
              </>
            )}

            {office && (
              <>
                <CircularProgBar
                  color="rgba(251, 41, 129, 1)"
                  year="Ist Year"
                  value={props.data[1][3].YEAR1.toFixed(2)}
                  percentage={(props.data[1][3].YEAR1 / 500) * 100}
                />
                <CircularProgBar
                  year="2nd Year"
                  color="rgba(251, 41, 129, 1)"
                  value={props.data[1][3].YEAR2.toFixed(2)}
                  percentage={(props.data[1][3].YEAR2 / 500) * 100}
                />
                <CircularProgBar
                  year="3rd Year"
                  color="rgba(251, 41, 129, 1)"
                  value={props.data[1][3].YEAR3.toFixed(2)}
                  percentage={(props.data[1][3].YEAR3 / 500) * 100}
                />
                <CircularProgBar
                  year="4th Year"
                  color="rgba(251, 41, 129, 1)"
                  value={props.data[1][3].YEAR4.toFixed(2)}
                  percentage={(props.data[1][3].YEAR4 / 500) * 100}
                />
              </>
            )}

            {it && (
              <>
                <CircularProgBar
                  color="rgba(157, 67, 248, 1)"
                  year="Ist Year"
                  value={props.data[1][4].YEAR1.toFixed(2)}
                  percentage={(props.data[1][4].YEAR1 / 500) * 100}
                />
                <CircularProgBar
                  year="2nd Year"
                  color="rgba(157, 67, 248, 1)"
                  value={props.data[1][4].YEAR2.toFixed(2)}
                  percentage={(props.data[1][4].YEAR2 / 500) * 100}
                />
                <CircularProgBar
                  year="3rd Year"
                  color="rgba(157, 67, 248, 1)"
                  value={props.data[1][4].YEAR3.toFixed(2)}
                  percentage={(props.data[1][4].YEAR3 / 500) * 100}
                />
                <CircularProgBar
                  year="4th Year"
                  color="rgba(157, 67, 248, 1)"
                  value={props.data[1][4].YEAR4.toFixed(2)}
                  percentage={(props.data[1][4].YEAR4 / 500) * 100}
                />
              </>
            )}

            {mecell && (
              <>
                <CircularProgBar
                  color="rgba(5, 242, 228, 1)"
                  year="Ist Year"
                  value={props.data[1][5].YEAR1.toFixed(2)}
                  percentage={(props.data[1][5].YEAR1 / 500) * 100}
                />
                <CircularProgBar
                  year="2nd Year"
                  color="rgba(5, 242, 228, 1)"
                  value={props.data[1][5].YEAR2.toFixed(2)}
                  percentage={(props.data[1][5].YEAR2 / 500) * 100}
                />
                <CircularProgBar
                  year="3rd Year"
                  color="rgba(5, 242, 228, 1)"
                  value={props.data[1][5].YEAR3.toFixed(2)}
                  percentage={(props.data[1][5].YEAR3 / 500) * 100}
                />
                <CircularProgBar
                  year="4th Year"
                  color="rgba(5, 242, 228, 1)"
                  value={props.data[1][5].YEAR4.toFixed(2)}
                  percentage={(props.data[1][5].YEAR4 / 500) * 100}
                />
              </>
            )}

            {total && (
              <>
                <CircularProgBar
                  color="rgba(9, 18, 255, 1)"
                  year="Ist Year"
                  value={props.data[1][6].YEAR1.toFixed(2)}
                  percentage={(props.data[1][6].YEAR1 / 1000) * 100}
                />
                <CircularProgBar
                  year="2nd Year"
                  color="rgba(9, 18, 255, 1)"
                  value={props.data[1][6].YEAR2.toFixed(2)}
                  percentage={(props.data[1][6].YEAR2 / 1000) * 100}
                />
                <CircularProgBar
                  year="3rd Year"
                  color="rgba(9, 18, 255, 1)"
                  value={props.data[1][6].YEAR3.toFixed(2)}
                  percentage={(props.data[1][6].YEAR3 / 1000) * 100}
                />
                <CircularProgBar
                  year="4th Year"
                  color="rgba(9, 18, 255, 1)"
                  value={props.data[1][6].YEAR4.toFixed(2)}
                  percentage={(props.data[1][6].YEAR4 / 1000) * 100}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseYearly;
