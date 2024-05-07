import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RevenueProjections from "./pages/RevenueProjections";
import PitchDeck from "./pages/PitchDeck";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./shared/Header/Header";
import { Toaster } from "react-hot-toast";
import Revenue from "./pages/Revenue-Expense/Revenue";
import RevYearly from "./pages/Revenue-Expense/RevYearly";
import TotalSales from "./pages/TotalSales";
import Acquisition from "./pages/Acquisition ";
import TotalRevenue from "./pages/TotalRevenue";
import Data from "./pages/Data";
import OfferInvestment from "./pages/offerInvestment/OfferInvestment";
import SavedPlan from "./pages/SavedPlans/SavedPlan";

function App() {
  return (
    <Router>
      <Toaster containerStyle={{ zIndex: "10000000" }} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/financial-projections" element={<Dashboard />} />
        <Route path="/pitch-deck" element={<PitchDeck />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/revenue-section" element={<RevYearly />} />
        <Route path="/revenue-projections" element={<RevenueProjections />} />
        <Route path="/total-sales" element={<TotalSales />} />
        <Route path="/user-acquisition" element={<Acquisition />} />
        <Route path="/total-revenue" element={<TotalRevenue />} />
        <Route path="/offer-investment" element={<OfferInvestment />} />
        <Route path="/data" element={<Data />} />
        <Route path="/saved-plan/:id" element={<SavedPlan />} />
      </Routes>
    </Router>
  );
}
export default App;
