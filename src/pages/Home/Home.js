import React from 'react'
import Sidebar from '../../components/mainSidebar/Sidebar'
import { FaExternalLinkAlt } from "react-icons/fa";
import "../Home/home.scss"
const Home = () => {
  return (
    <div className='flexContainer'>
      <Sidebar />
      <div className='infoConatiner'>

      <a href='https://www.bidchemz.com/insights/dashboard'>Go to BidChemz Overview <FaExternalLinkAlt /></a>
      </div>
    </div>
  )
}

export default Home