import React from 'react'
import Navbar from "../navbar/Navbar";
import { MdOutlineManageSearch } from "react-icons/md";
import { FiDownloadCloud } from "react-icons/fi";
import CreateSchedule from "../modal/CreateSchedule";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard = () => {
  return (
    <div>
    {/* ---------------- Navbar -----------------------*/}
    <Navbar />

    {/* ---------------- Body -----------------------*/}
    <div className="container mx-5">
      {/* --------------- Create Schedule ------------- */}
      <CreateSchedule />
      
      {/* --------------- Search ------------- */}
      <form className="my-5 col-2-search">
        <input type="text" className="col-input" placeholder="Search"></input>
        <button className="btn-input"><MdOutlineManageSearch style={{fontSize: '45px'}}/></button>
      </form>

      {/* --------------- Schedules ------------- */}
      <div className="box">
        <Row className="mx-7">
          <Col xs={4}>31/08/22</Col>
          <Col xs={6}><a href="/schedule:id">Schedule 1</a></Col>
          <Col xs={2}><a href="/dashboard"><FiDownloadCloud style={{color: '#FDCB00', fontSize: '35px'}}/></a></Col>
        </Row>
      </div>
    </div>
    </div>
  )
}

export default Dashboard