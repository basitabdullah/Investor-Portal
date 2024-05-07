import Sidebar from "../../components/mainSidebar/Sidebar";
import "../../pages/offerInvestment/TopBar";
import "../../pages/offerInvestment/offerInvest.scss";
import { useEffect, useState } from "react";
import CreateInvestment from "./CreateInvestment";
import toast from "react-hot-toast";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import TopBar from "../../pages/offerInvestment/TopBar";

const OfferInvestment = () => {
  const [submitted, setSubmited] = useState(false);
  const [dataArray, setDataArray] = useState([]);

  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  const planData = [
    {
      timePeriod: [
        {
          title: "Amount you want to invest",
          id: 1,
          value: amount,
        },

        {
          title: "Time period in years",
          id: 2,
          value: years,
        },
      ],

      revInputs: [
        {
          title: "Gross Revenue",
          id: 1,
          value: (amount * 2).toFixed(1),
        },

        {
          title: "Less Operating Cost",
          id: 2,
          value: (amount / 4).toFixed(1),
        },

        {
          title: "Profit",
          id: 3,
          value: (amount / 2.4).toFixed(1),
        },
      ],

      roiInputs: [
        {
          title: "Value",
          id: 1,
          value: (amount * 1.5).toFixed(1),
        },

        {
          title: "X Times",
          id: 2,
          value: Number(years + 1).toFixed(1),
        },

        {
          title: "Percentage growth on total investments",
          id: 3,
          value: (amount / 2.4 / 100).toFixed(1),
        },
      ],
    },

  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (years === "" && amount === "")
      return toast.error("Inputs Cannot Be Empty!");
    const newArray = [...planData];
    setDataArray(newArray);
    setSubmited(true);
    toast.success("Created Your Plan");
  };
  const handleFetch = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "plans"));
      querySnapshot.forEach((doc) => {
         console.log(doc.id, " => ", doc.data());
         setFetchedData(doc.data());
      });
      
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(fetchedData);
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      {submitted ? (
        <CreateInvestment
          years={years}
          amount={amount}
          planData={dataArray}
          submitted={(submitted, setSubmited)}
        />
      ) : (
        <div className=" flexContainer">
          <Sidebar />

          <div className="w-full overflow-auto flex-col p-5 ">

            <TopBar data={fetchedData}/>

            <div className="offerInvestment">
              <h1>Create Your Own Investing Plan</h1>
              <form className="investmentInputs">
                <h5>Investment Details</h5>
                <div className="inputCon">
                  <p>Amount you want to invest</p>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="$30000"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div className="inputCon">
                  <p>Time period in years</p>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="3"
                      onChange={(e) => setYears(e.target.value)}
                    />
                  </div>
                </div>

                <div className="submit">
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfferInvestment;
