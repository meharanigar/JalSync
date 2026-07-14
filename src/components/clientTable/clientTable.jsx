import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ClientTable.css";

function ClientTable() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedClients =
      JSON.parse(localStorage.getItem("clients")) || [];

    setClients(storedClients);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );

    if (!confirmDelete) return;

    const updatedClients = clients.filter(
      (client) => client.id !== id
    );

    localStorage.setItem(
      "clients",
      JSON.stringify(updatedClients)
    );

    setClients(updatedClients);
  };
  const filteredClients = clients.filter((client) =>
  client.fullName?.toLowerCase().includes(search.toLowerCase()) ||
  client.email?.toLowerCase().includes(search.toLowerCase()) ||
  client.village?.toLowerCase().includes(search.toLowerCase()) ||
  client.ward?.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="client-table">
      <h2>Client Details</h2>

      <div className="search-bar">
        <div className="table-header">
  <h3>Total Clients: {filteredClients.length}</h3>
</div>
  <input
    type="text"
    placeholder="🔍 Search by Name, Email, Village or Ward..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>


      {clients.length === 0 ? (
        <h3>No Clients Registered Yet!</h3>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>S.No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Village</th>
              <th>Ward</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredClients.map((client, index) => (
              <tr key={client.id}>
                <td>{index + 1}</td>
                <td>{client.id}</td>
                <td>{client.fullName}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>{client.village}</td>
                <td>{client.ward}</td>

                <td>
                  <Link to={`/client/${client.id}`}>
                    <button>View</button>
                  </Link>

                  <Link to={`/client/edit/${client.id}`}>
                    <button>Edit</button>
                  </Link>

                  <button
                    onClick={() => handleDelete(client.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ClientTable;