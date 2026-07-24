import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/api";
import "./EditClient.css";

function EditClient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [village, setVillage] = useState("");
  const [ward, setWard] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    fetchClient();
  }, []);

  const fetchClient = async () => {
    try {
      const res = await api.get(`/clients/${id}`);

      const client = res.data.client;

      setFullName(client.fullName);
      setEmail(client.email);
      setPhone(client.phone);
      setVillage(client.village);
      setWard(client.ward);
    } catch (error) {
      console.log(error);
      alert("Client not found");
    }
  };

  const updateClient = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/clients/${id}`, {
        fullName,
        email,
        phone,
        village,
        ward,
      });

      alert("Client Updated Successfully!");

      navigate("/clienttable");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

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