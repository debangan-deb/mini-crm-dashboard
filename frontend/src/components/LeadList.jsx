import API from "../services/api";

import { toast } from "react-toastify";

function LeadList({ leads, fetchLeads }) {

  const updateStatus = async (id, status) => {

    await API.put(`/leads/${id}`, {
      status,
    });

    toast.success("Status updated");

    fetchLeads();
  };

  const deleteLead = async (id) => {

    await API.delete(`/leads/${id}`);

    toast.success("Lead deleted");

    fetchLeads();
  };

  return (
    <div className="lead-list">

      {leads.length === 0 ? (
        <p>No leads found</p>
      ) : (
        leads.map((lead) => (

          <div className="lead-card" key={lead.id}>

            <h3>{lead.name}</h3>

            <p>{lead.phone}</p>

            <p>Source: {lead.source}</p>

            <select
              value={lead.status}
              onChange={(e) =>
                updateStatus(
                  lead.id,
                  e.target.value
                )
              }
            >
              <option>Interested</option>
              <option>Not Interested</option>
              <option>Converted</option>
            </select>

            <button
              onClick={() => deleteLead(lead.id)}
            >
              Delete
            </button>

          </div>

        ))
      )}

    </div>
  );
}

export default LeadList;