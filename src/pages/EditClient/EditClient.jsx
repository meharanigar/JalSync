import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditClient.css";

function EditClient() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get all clients from localStorage
  const clients = JSON.parse(localStorage.getItem("clients")) || [];

  // Find selected client
  const client = clients.find((c) => c.id === Number(id));

  if (!client) {
    return <h2>No Client Found!</h2>;
  }

  // Form State
  const [fullName, setFullName] = useState(client.fullName || "");
  const [email, setEmail] = useState(client.email || "");
  const [phone, setPhone] = useState(client.phone || "");
  const [village, setVillage] = useState(client.village || "");
  const [ward, setWard] = useState(client.ward || "");

  function updateClient(e) {
    e.preventDefault();

    const updatedClients = clients.map((c) =>
      c.id === Number(id)
        ? {
            ...c,
            fullName,
            email,
            phone,
            village,
            ward,
          }
        : c
    );

    localStorage.setItem(
      "clients",
      JSON.stringify(updatedClients)
    );

    alert("Client Updated Successfully!");

    navigate("/clienttable");
  }

  return (
    <div className="edit-client">
      <h2>Edit Client</h2>

      <form onSubmit={updateClient}>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Village"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ward"
          value={ward}
          onChange={(e) => setWard(e.target.value)}
        />

        <button type="submit">
          Update Client
        </button>

      </form>
    </div>
  );
}

export default EditClient;