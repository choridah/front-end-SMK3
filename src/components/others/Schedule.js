import React from 'react'
import Navbar from "../navbar/Navbar";
import CarouselFadeExample from "../carousel/Klausa";

const Schedule = () => {
  return (
    <div>
    {/* ---------------- Navbar -----------------------*/}
    <Navbar />

    {/* ---------------- Body -----------------------*/}
    <div className="container mt-5 mx-5">
      {/* --------------- Back to Schedule ------------- */}
      <a href="/dashboard" className="btn-input btn-fullwidth text-bold">Back to Schedule</a>
      
      <form action="">
        {/* --------------- Slide Klausa ------------- */}
        <div className="mt-5 mb-5">
          <span className="button is-warning mr-2"></span>
          <span className="btn-list-klausa mr-1">1</span>
          <span className="btn-list-klausa mr-1">2</span>
          <span className="btn-list-klausa mr-1">3</span>
          <span className="btn-list-klausa mr-1">4</span>
          <span className="btn-list-klausa mr-2">5</span>
          <span className="button is-warning mr-1"></span>
          <CarouselFadeExample />
        </div>
        
        {/* --------------- Assessment ------------- */}
        <div>
          <h2 className="mt-5 text-center text-bold">Assessment Result</h2>
          <ul type="radio" className="mt-3 text-center list-circle">
            <li className="btn-list mr-3">0</li>
            <li className="btn-list mr-3">1</li>
          </ul>
        </div>

        {/* --------------- Reason ------------- */}
        <div className="field mt-5">
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
        <div className="field mt-2 col-2">
          <div></div>
          <button className="btn-input">Next</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Schedule