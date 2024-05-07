import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Sidebar from "../../components/mainSidebar/Sidebar";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import OfferGrant from "../../components/popUps/offerGrant/OfferGrant.jsx";
import InvestEquity from "../../components/popUps/investmentEquity/InvestEquity.jsx";
import OfferDebt from "../../components/popUps/offerDebt/OfferDebt";
import "../../pages/offerInvestment/topbar.scss";
import { addDoc } from "firebase/firestore";
import TopBar from "./TopBar.jsx";
const CreateInvestment = (props) => {
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [offerGrant, setOfferGrant] = useState(false);
  const [offerDebt, setOfferDebtt] = useState(false);
  const [investEquity, setInvestEquity] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [savedName, setSavedName] = useState("");
  const { planData, submitted } = props;

  const [fetchedData, setFetchedData] = useState([]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (savedName === "") return toast.error("Inputs Cannot Be Empty!");
    await addDoc(collection(db, "plans"), { ...planData, savedName });
    toast.success("Plan Saved Successfully");
    setShowSaveModal(false);
    submitted(false);
    window.location.reload();
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
    <div className=" flexContainer">
      <Sidebar />
      <div className="w-full overflow-auto flex-col ">
        <TopBar data={fetchedData} />

        <div className="offerInvestment">
          <h1>Create Your Own Investing Plan</h1>
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
              <button
                className="saveBtn"
                type="submit"
                onClick={() => setShowSaveModal(true)}
              >
                Save Plan
              </button>
              <div
                className="investBtn"
                onClick={() => setShowInvestModal(true)}
              >
                Invest
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSaveModal && (
        <div className="saveModal">
          <div className="saveModalContainer">
            <IoMdClose onClick={() => setShowSaveModal(false)} />
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Give a name to your plan!"
                onChange={(e) => setSavedName(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
            </div>
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

export default CreateInvestment;
