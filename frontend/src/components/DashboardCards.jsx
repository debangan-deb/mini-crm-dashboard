function DashboardCards({ leads }) {

  const total = leads.length;

  const interested = leads.filter(
    (lead) => lead.status === "Interested"
  ).length;

  const converted = leads.filter(
    (lead) => lead.status === "Converted"
  ).length;

  return (
    <div className="dashboard">

      <div className="card">
        <h2>{total}</h2>
        <p>Total Leads</p>
      </div>

      <div className="card">
        <h2>{interested}</h2>
        <p>Interested</p>
      </div>

      <div className="card">
        <h2>{converted}</h2>
        <p>Converted</p>
      </div>

    </div>
  );
}

export default DashboardCards;