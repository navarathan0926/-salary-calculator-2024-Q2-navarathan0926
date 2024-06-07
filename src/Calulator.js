import React from 'react'
// import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import './index.css';
import CalculatorComponent from './Components/CalculatorComponent';
import SalaryComponent from './Components/SalaryComponent';


const Calulator = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 m-4">
      <div className="container">
        <div className="row p-3 ">
          {/* --------- Calculate Your Salary ---------- */}
          <CalculatorComponent />
          {/* --------- Your Salary ---------- */}
          <SalaryComponent />
        </div>
      </div>
    </div>

    
  )
}

export default Calulator