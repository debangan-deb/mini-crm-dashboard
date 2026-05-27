import { useEffect, useState } from "react";
import API from "./services/api";

import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import DashboardCards from "./components/DashboardCards";
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    try {
      const response = await API.get("/leads");
      setLeads(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div className="container">

        <DashboardCards leads={leads} />

        <LeadForm fetchLeads={fetchLeads} />

        <input
          type="text"
          placeholder="Search leads..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <LeadList
          leads={filteredLeads}
          fetchLeads={fetchLeads}
        />

      </div>
      <ToastContainer />
    </div>
  );
}

export default App;