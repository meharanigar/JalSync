import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;