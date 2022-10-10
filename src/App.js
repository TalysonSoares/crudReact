import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Listar from "./pages/Listar";
import Login from "./pages/Login";

export default function App() {  

  return (
    <div>

      <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/listar" element={<Listar/>} />
          <Route path="/novo" element={<h1>Escola</h1>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
