import React from 'react'
import Navbar from "../navbar/Navbar";
import CarouselSchedule from "../carousel/Klausa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChooseAssessment from '../modal/ChooseAssessment';

const Schedule = () => {
  return (
    <div>
    {/* ---------------- Navbar -----------------------*/}
    <Navbar />

    {/* ---------------- Body -----------------------*/}
    <div className="container mt-5 mx-5">
      {/* --------------- Back to Schedule ------------- */}
      <a href="/dashboard" className="btn-input btn-fullwidth text-bold">Back to Schedule</a>
      
      <form action="" className="mb-5">
        {/* --------------- Slide Klausa ------------- */}
        <div className="mt-5 mb-5">
          <CarouselSchedule />
        </div>
        
        {/* --------------- Assessment ------------- */}
        <div>
          <h2 className="mt-5 text-center text-bold">Assessment Result</h2>
          <ChooseAssessment />
        </div>

        {/* --------------- Reason ------------- */}
        <div className="field">
            <div className="controls">
                <label className="label">Reason</label>
                <textarea className="col-textarea"></textarea>
            </div>
        </div>
        <div className="field mt-5">
            <div className="controls">
                <input type="text" className="col-input" placeholder="Objective"></input>
            </div>
        </div>
        <div className="field mt-5">
            <div className="controls">
                <input type="text" className="col-input" placeholder="No CAR"></input>
            </div>
        </div>
        <a href="/">Attachment</a><br/>
        <Row>
          <Col xs={8} md={4}></Col>
          <Col xs={4} md={4}><button className="btn-input">Next</button></Col>
        </Row>
      </form>
    </div>
    </div>
  )
}

export default Schedule