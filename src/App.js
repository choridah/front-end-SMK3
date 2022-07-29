import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/template/Dashboard";
import Login from "./components/auth/Login";
// import Navbar from "./components/navbar/Navbar";
import Register from "./components/auth/Register";
import Schedule from "./components/others/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
        <Route path="/schedule:id" element={ <Schedule/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
