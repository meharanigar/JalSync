import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ClientTable.css";
import api from "../../api/api";

function ClientTable() {
  const navigate = useNavigate();

  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    fetchClients();
  }, []);

  // Fetch all clients
  const fetchClients = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/clients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setClients(res.data.clients);
    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        navigate("/login");
      } else if (error.response?.status === 403) {
        alert("Access denied. Admin only.");
      } else {
        alert("Failed to load clients.");
      }
    }
  };

  // Delete Client
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Client deleted successfully.");

      fetchClients();

    } catch (error) {
      console.error(error);

      if (error.response?.status === 403) {
        alert("Only Admin can delete clients.");
      } else {
        alert("Failed to delete client.");
      }
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
          <h3>Total Clients : {filteredClients.length}</h3>
        </div>

        <input
          type="text"
          placeholder="🔍 Search by Name, Email, Village or Ward..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredClients.length === 0 ? (
        <h3>No Clients Found!</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Profile</th>
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

                <td>
                  {client.profileImage ? (
                    <img
                      src={`http://localhost:5000/uploads/${client.profileImage}`}
                      alt={client.fullName}
                      className="table-profile"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>

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