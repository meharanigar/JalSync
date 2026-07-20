import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ClientTable.css";
import api from "../../api/api";

function ClientTable() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchClients();
  }, []);

  // Fetch all clients from MongoDB
  const fetchClients = async () => {
    try {
      const res = await api.get("/clients");
      setClients(res.data.clients);
    } catch (error) {
      console.error(error);
      alert("Failed to load clients.");
    }
  };

  // Delete client
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/clients/${id}`);

      // Refresh client list
      fetchClients();

      alert("Client deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to delete client.");
    }
  };

  const filteredClients = clients.filter(
    (client) =>
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

      {filteredClients.length === 0 ? (
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
              <tr key={client._id}>
                <td>{index + 1}</td>
                <td>{client._id}</td>
                <td>{client.fullName}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>{client.village}</td>
                <td>{client.ward}</td>

                <td>
                  <Link to={`/client/${client._id}`}>
                    <button>View</button>
                  </Link>

                  <Link to={`/client/edit/${client._id}`}>
                    <button>Edit</button>
                  </Link>

                  <button
                    onClick={() => handleDelete(client._id)}
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