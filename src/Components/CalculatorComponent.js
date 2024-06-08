import React, { useState} from 'react';
// import EarningForm from './EarningForm';
import Reset_icon from './../assets/images/_Link.png'
import { useSelector, useDispatch } from 'react-redux';
import  { reset, setBasic} from './../features/calculator/salarySlice'
// import AddEarningForm from '../features/earnings/AddEarningForm';
import EarningsList from '../features/earnings/EarningsList';
import EditEarningForm from '../features/earnings/EditEarningForm';
import DeductionsList from '../features/deductions/DeductionsList';
import EditDeductionForm from '../features/deductions/EditDeductionForm';
import {resetDeductions} from '../features/deductions/deductionsSlice'
import {resetEarnings} from '../features/earnings/earningsSlice'


const CalculatorComponent = () => {
    const [earningSection,setEarningSection] = useState(false);
    const [deductionSection,setDeductionSection] = useState(false);



    const salary = useSelector((state) => state.salary) ;
    const basic = salary.basic || '';
    
    const dispatch = useDispatch();

    const [basicSalary, setBasicSalary] = useState(basic);

    // const addValue = Number(basicSalary) || 0;

    const resetAll = () =>{
        setBasicSalary(0);
        dispatch(reset());
        dispatch(resetDeductions());
        dispatch(resetEarnings());
    }

   

    const handleOnChange = (e) => {
        const value = Number(e.target.value) || 0;
        setBasicSalary(value);
        dispatch(setBasic(value));
      };
    
    const handleSubmit = async(e) =>{
        // e.preventDefault()
        // const data = await axios.post("/locations/create",locationFormData)
        // console.log(data)
        // if(data.data.success){
        //   setAddLocationSection(false)
        //   alert(data.data.message)
        //   getFetchData()
        //   setLocationFormData({
        //     name: "",
        //     address : "",
        //     phone : ""
        //   })
        // }
      }
    
  return (
    <>
        <div className="col-lg-6 col-md-12 mb-4 ">
            <div className="card card-outline card-warning">
                <div className="card-header">
                <div className="client-header">
                    <button className="btn text-primary btn-reset float-right"><img src={Reset_icon} alt="" onClick={resetAll} /></button>
                    <h4>Calculate Your Salary</h4>
                    <form className="mb-4">
                    <label htmlFor="inputBasicSalary">Basic Salary</label>
                    <br />
                    <input type="number" className="rounded-1" name="inputBasicSalary" id="inputBasicSalary"  
                        value={basic} 
                        onChange={handleOnChange}
                        
                        // onChange={(e) => setBasicSalary(e.target.value)}
                    />
                    {/* <h3>{salary}</h3> */}
                    </form>
                    <h5>Earnings</h5>
                    <p className="text-secondary">
                        <small>Allowance, Fixed Allowance, Bonus, and etc.</small>
                    </p>
                    
                    <EarningsList />

                    <button className="btn text-primary pb-3" onClick={()=>setEarningSection(true)}>+ Add New Allowance</button>
                       
                    <hr />
                    <h5>Deductions</h5>
                    <p className="text-secondary small">Salary Advances, Loan Deductions, and Allowance</p>

                    <DeductionsList />

                    <button className="btn text-primary pb-3" onClick={()=>setDeductionSection(true)} >+ Add New Deduction</button>
                </div>
                </div>
            </div>
        </div>
        {/* Earnings form */}
        {
        earningSection && (
            // <AddEarningForm 
            //     handleClose = {()=>setEarningSection(false)}
            // />
            // <EarningForm
            // handleSubmit={handleSubmit}
            // handleOnChange={handleOnChange}
            // handleClose = {()=>setEarningSection(false)}
            // // rest = {locationFormData}
            // />
            <EditEarningForm 
                handleClose = {()=>setEarningSection(false)}
                operation='Add'
                // key={''}
                earning={null}
                heading="Add New Earnings"
            />

        )
        }

        {/* Deductions section */}
        {
        deductionSection && (
            <EditDeductionForm
                handleClose = {()=>setDeductionSection(false)}
                operation='Add'
                // key={''}
                earning={null}
                heading="Add New Deductions"
            />

        )
        }
        
    </>
    
    
  )
}

export default CalculatorComponent;