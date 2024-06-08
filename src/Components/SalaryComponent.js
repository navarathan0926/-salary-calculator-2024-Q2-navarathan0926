import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllEarnings } from '../features/earnings/earningsSlice';
import { selectAllDeductions } from '../features/deductions/deductionsSlice';
import  { setTotalEarning, selectAllSalaries, 
  setGrossDeduction, setTotalEarningsForEPF, setGrossEarning, setGrossSalaryForEPF,
  setEmployeeEPF,setEmployerEPF,setEmployerETF , setTax, setAPIT,
  setNetSalary,setCTC} from './../features/calculator/salarySlice';


const SalaryComponent = () => {
  const dispatch = useDispatch();
  const basic = useSelector((state) => state.salary.basic);
  const earnings = useSelector(selectAllEarnings);
  const deductions = useSelector(selectAllDeductions);
  const salaries = useSelector(selectAllSalaries);
  const red=25000;

  const calTotalEarnings = ()=>{
    const totalEarningsAmount = earnings.reduce((total,earning)=>total +parseFloat(earning.amount),0 )
    const totalEarning = totalEarningsAmount+basic;
    dispatch(setTotalEarning(totalEarning));
  }

  const calTotalDeduction = ()=>{
    const totalDeductionsAmount = deductions.reduce((total,deduction)=>total +parseFloat(deduction.amount),0 )
    dispatch(setGrossDeduction(totalDeductionsAmount));
  }

  const calTotalEarningsForEPF =() =>{
    const totalEarningsEPF = earnings
                                    .filter((earning) => earning.epf)
                                    .reduce((total,earning)=>total +parseFloat(earning.amount),0 );
    const totalEarningsForEPF=basic+totalEarningsEPF;
    dispatch(setTotalEarningsForEPF(totalEarningsForEPF));
    dispatch(setGrossEarning(salaries));
    dispatch(setGrossSalaryForEPF(salaries));
    dispatch(setEmployeeEPF(salaries));
    dispatch(setEmployerEPF(salaries));
    dispatch(setEmployerETF(salaries));
    dispatch(setTax(salaries));
    dispatch(setAPIT(salaries));
    dispatch(setNetSalary(salaries));
    dispatch(setCTC(salaries));
  }


  useEffect(() =>{
    calTotalEarnings();
    calTotalDeduction();
    calTotalEarningsForEPF();
    

  },[earnings, deductions, basic]);

  const formatCurrency = (value) => {
    return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };


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
                      <p className="small">{formatCurrency(basic)}</p>
                      <p className="small">{formatCurrency(salaries.grossEarning)}</p>
                      <p className="small">{salaries.grossDeduction > 0 ? `-${formatCurrency(salaries.grossDeduction)}` : formatCurrency(salaries.grossDeduction)}</p>
                      <p className="small">{salaries.employeeEPF > 0 ? `-${formatCurrency(salaries.employeeEPF)}` : formatCurrency(salaries.employeeEPF)}</p>
                      <p className="small">{salaries.APIT > 0 ? `-${formatCurrency(salaries.APIT)}` : formatCurrency(salaries.APIT)}</p>
                    </div>
                  </div>
                  <div className="card card-outline card-warning">
                    <div className="d-flex justify-content-between p-1">
                      <div className="col-6">
                        <p className="small">Net Salary (Take Home)</p>
                      </div>
                      <div className="col-6 text-end">
                        <p className="small">{formatCurrency(salaries.netSalary)}</p>
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
                      <p className="small">{formatCurrency(salaries.employerEPF)}</p>
                      <p className="small">{formatCurrency(salaries.employerETF)}</p>
                      <p className="small">{formatCurrency(salaries.CTC)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default SalaryComponent