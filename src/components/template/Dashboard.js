import React from 'react'
import Navbar from "../navbar/Navbar";
import { MdOutlineManageSearch } from "react-icons/md";
import { FiDownloadCloud } from "react-icons/fi";
import App from "../modal/CreateSchedule";

const Dashboard = () => {
  return (
    <div>
    {/* ---------------- Navbar -----------------------*/}
    <Navbar />

    {/* ---------------- Body -----------------------*/}
    <div className="container mt-5 mx-5">
      {/* --------------- Create Schedule ------------- */}
      <App />
      
      {/* --------------- Search ------------- */}
      <form className="my-5 col-2-search mr-3">
        <input type="text" className="col-input" placeholder="Search"></input>
        <button className="btn-input"><MdOutlineManageSearch style={{fontSize: '45px'}}/></button>
      </form>

      {/* --------------- Schedules ------------- */}
      <div className="box">
        <div className="col-3">
          <div>31/08/22</div>
          <div><a href="/schedule:id">Schedule 1</a></div>
          <div><a href="/dashboard"><FiDownloadCloud style={{color: '#FDCB00', fontSize: '25px'}}/></a></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard