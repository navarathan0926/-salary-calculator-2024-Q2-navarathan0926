import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  { reset, incrementByAmount, setBasic} from './../features/calculator/salarySlice'

const SalaryComponent = () => {
  const basic = useSelector((state) => state.salary.basic);

  return (
    <div className="col-lg-4 col-md-12">
            <div className="card card-outline card-warning">
              <div className="card-header">
                <div className="client-header">
                  <h4>Your Salary</h4>
                  <div className="d-flex justify-content-between">
                    <div className="col-6">
                      <p className="text-secondary small">Items</p>
                      <p className="small">Basic Salary</p>
                      <p className="small">Gross Earning</p>
                      <p className="small">Gross Deduction</p>
                      <p className="small">Employee EPF (8%)</p>
                      <p className="small">APIT</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="text-secondary small">Amount</p>
                      <p className="small">{basic}</p>
                      <p className="small">100,000.00</p>
                      <p className="small">0.00</p>
                      <p className="small">-8,000.00</p>
                      <p className="small">0.00</p>
                    </div>
                  </div>
                  <div className="card card-outline card-warning">
                    <div className="d-flex justify-content-between p-1">
                      <div className="col-6">
                        <p className="small">Net Salary (Take Home)</p>
                      </div>
                      <div className="col-6 text-end">
                        <p className="small">92,000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-secondary small py-3">Contribution from the Employer</div>
                  <div className="d-flex justify-content-between p-1">
                    <div className="col-6">
                      <p className="small">Employer EPF (12%)</p>
                      <p className="small">Employer ETF (3%)</p>
                      <p className="small">CTC (Cost to Company)</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="small">12,000.00</p>
                      <p className="small">3,000.00</p>
                      <p className="small">107,000.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default SalaryComponent