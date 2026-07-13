import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Details from "./pages/Details/Details";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />

          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          <Route path="details/:id" element={<Details />} />

          <Route path="*" element={<NotFound/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;