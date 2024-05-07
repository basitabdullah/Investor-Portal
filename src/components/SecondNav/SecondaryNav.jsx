import React from "react";
import { Link } from "react-router-dom";
import { TiDownload } from "react-icons/ti";
import { BsArrowLeft } from "react-icons/bs";
import "../../components/SecondNav/secondaryNav.scss";
import exelfile from "../../assets/excel.xlsx";
import exelfile2 from "../../assets/table.xlsx";

const SecondaryNav = (props) => {
  const downloadExcelFile = () => {
    const excelFilePath = exelfile;
    window.open(excelFilePath);
  };

  const downloadExcelFile2 = () => {
    const excelFilePath = exelfile2;
    window.open(excelFilePath);
  };
  return (
    <>
      <div className="topBar">
        <button
          href="http://localhost:3000/financial-projections"
          className="download"
          onClick={downloadExcelFile}
        >
          <TiDownload />
        </button>
        <button onClick={downloadExcelFile2} className="view">
          View Report In Table
        </button>
        <Link to="/offer-investment" className="investBtn">
          Invest In BidChemz
        </Link>
      </div>
      <div className="back">
        <Link to={"/financial-projections"}>
          <BsArrowLeft />
        </Link>

        <h1 className="title">{props.title}</h1>
      </div>
    </>
  );
};

export default SecondaryNav;
