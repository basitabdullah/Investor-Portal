import Sidebar from "../../components/mainSidebar/Sidebar";
import { useCallback, useEffect, useState } from "react";
import RevYearly from "./RevYearly";
import ExpenseYearly from "./ExpenseYearly";
import ProfitLoss from "./ProfitLoss";
import "../../pages/Revenue-Expense/revYearly.scss";
import SecondaryNav from "../../components/SecondNav/SecondaryNav";
import database from "../../firebase";
import { get, ref } from "firebase/database";
import Loader from "../../components/Loader/Loader";

const Revenue = () => {
  const [revenue, setRevenue] = useState(true);
  const [expense, setExpense] = useState(false);
  const [profit, setProfit] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

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


  const RevenueToggle = () => {
    setRevenue(true);
    setExpense(false);
    setProfit(false);
  };

  const expenseToggle = () => {
    setExpense(true);
    setProfit(false);
    setRevenue(false);
  };

  const ProfitToggle = () => {
    setProfit(true);
    setExpense(false);
    setRevenue(false);
  };

  return (
    <div className="flexContainer">
      <Sidebar />
      <div
        className="p-5 w-full"
        style={{
          overflowY: "scroll",
        }}
      >
        <SecondaryNav />

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="mt-6">
              <h2 className="font-bold text-2xl">Revenue/Expense /P & L </h2>
              <p>
                Click one by one for better understanding and get complete
                information
              </p>

              <div className="mt-10 flex gap-4">
                <button
                  className="bg-[#FD8660] text-white text-center px-5 py-1 rounded-lg"
                  onClick={RevenueToggle}
                >
                  Revenue
                </button>

                <button
                  className="bg-[#783DF4] text-white text-center px-5 py-1 rounded-lg"
                  onClick={expenseToggle}
                >
                  Expense Year-wise
                </button>

                <button
                  className="bg-[#FFD600] text-white text-center px-5 py-1 rounded-lg"
                  onClick={ProfitToggle}
                >
                  Profit/ Loss
                </button>
              </div>

              <div
                className="chartContainer"
                style={{ display: revenue ? "flex" : "none" }}
              >
                <RevYearly data={data} />
              </div>

              <div
                className="chartContainer"
                style={{ display: expense ? "flex" : "none" }}
              >
                <ExpenseYearly data={data} />
              </div>

              <div
                className="chartContainer"
                style={{ display: profit ? "flex" : "none" }}
              >
                <ProfitLoss data={data} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Revenue;
