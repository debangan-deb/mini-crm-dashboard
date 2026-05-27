import { useState } from "react";
import API from "../services/api";

import { toast } from "react-toastify";

function LeadForm({ fetchLeads }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    source: "Call",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/leads", formData);
      
      toast.success("Lead added successfully");
      
      setFormData({
        name: "",
        phone: "",
        source: "Call",
      });

      fetchLeads();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter name"
        required
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Enter phone"
        required
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
      />

      <select
        value={formData.source}
        onChange={(e) =>
          setFormData({
            ...formData,
            source: e.target.value,
          })
        }
      >
        <option>Call</option>
        <option>WhatsApp</option>
        <option>Field</option>
      </select>

      <button type="submit">
        Add Lead
      </button>

    </form>
  );
}

export default LeadForm;