import React from "react";
import "../styles/flexContainer.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import Sidebar from "../components/mainSidebar/Sidebar";

const PitchDeck = () => {
  return (
    <div className="flexContainer">
      <Sidebar />
      <div className="infoConatiner">
        <a href="https://www.bidchemz.com/insights/decks">
          Go to BidChemz Pitch Deck <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default PitchDeck;
