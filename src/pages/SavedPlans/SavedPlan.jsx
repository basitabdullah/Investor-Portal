import { useEffect, useState } from "react";
import Sidebar from "../../components/mainSidebar/Sidebar";
import { IoMdClose } from "react-icons/io";
import OfferGrant from "../../components/popUps/offerGrant/OfferGrant.jsx";
import InvestEquity from "../../components/popUps/investmentEquity/InvestEquity.jsx";
import OfferDebt from "../../components/popUps/offerDebt/OfferDebt";
import "../../pages/offerInvestment/topbar.scss";
import TopBar from "../offerInvestment/TopBar.jsx";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../../components/Loader/Loader.jsx";

const SavedPlan = () => {
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [offerGrant, setOfferGrant] = useState(false);
  const [offerDebt, setOfferDebtt] = useState(false);
  const [investEquity, setInvestEquity] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const planData = [
    {
      timePeriod: [
        {
          title: "Amount you want to invest",
          id: 1,
          value: 45,
        },

        {
          title: "Time period in years",
          id: 2,
          value: 45,
        },
      ],

      revInputs: [
        {
          title: "Gross Revenue",
          id: 1,
          value: 45,
        },

        {
          title: "Less Operating Cost",
          id: 2,
          value: 45,
        },

        {
          title: "Profit",
          id: 3,
          value: 45,
        },
      ],

      roiInputs: [
        {
          title: "Value",
          id: 1,
          value: 45,
        },

        {
          title: "X Times",
          id: 2,
          value: 45,
        },

        {
          title: "Percentage growth on total investments",
          id: 3,
          value: 45,
        },
      ],
    },
  ];
  const handleFetch = async () => {
   try {
     const querySnapshot = await getDocs(collection(db, "plans"));
     querySnapshot.forEach((doc) => {
       setFetchedData(doc.data());
     });
     setLoading(false);
   } catch (error) {
    console.log(error);
   }
    
  };
  // console.log(fetchedData);
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className=" flexContainer">
      <Sidebar />
      <div className="w-full overflow-auto flex-col ">
        <TopBar data={fetchedData} loading={loading} />

        {loading ? (
          <Loader />
        ) : (
          <div className="offerInvestment">
            <h1>{fetchedData.savedName}</h1>
            <div className="investmentInputs">
              <h5>Investment Details</h5>

              {planData[0].timePeriod.map((i) => (
                <div className="inputCon" key={i.id}>
                  <p>{i.title}</p>
                  <div className="textContainer">
                    <div className="text">{i.value}</div>
                  </div>
                </div>
              ))}

              <div className="bottom" style={{ marginTop: "7rem" }}>
                {planData[0].revInputs.map((i) => (
                  <div className="inputCon" key={i.id}>
                    <p>{i.title}</p>
                    <div className="textContainer">
                      <div className="text">{i.value}</div>
                    </div>
                  </div>
                ))}

                <h5>Return on Investment ( ROI )</h5>

                {planData[0].roiInputs.map((i) => (
                  <div className="inputCon" key={i.id}>
                    <p>{i.title}</p>
                    <div className="textContainer">
                      <div className="text">{i.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="invest">
                <div
                  className="investBtn"
                  onClick={() => setShowInvestModal(true)}
                >
                  Invest
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showInvestModal && (
        <div className="InvestModal">
          <div className="investModalContainer">
            <IoMdClose onClick={() => setShowInvestModal(false)} />
            <button className="first" onClick={() => setOfferGrant(true)}>
              Offer grant
            </button>
            <button className="second" onClick={() => setInvestEquity(true)}>
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
      {offerDebt && <OfferDebt setterFunc={setOfferDebtt} state={offerDebt} />}
    </div>
  );
};

export default SavedPlan;
