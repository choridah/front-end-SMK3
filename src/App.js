import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Dashboard from "./components/template/Dashboard";
import Login from "./components/auth/Login";
// import Navbar from "./components/navbar/Navbar";
import Register from "./components/auth/Register";
import Schedule from "./components/others/Schedule";
import ChangePassword from "./components/others/ChangePassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
        <Route path="/schedule:id" element={ <Schedule/> } />
        <Route path="/change-password" element={ <ChangePassword/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
