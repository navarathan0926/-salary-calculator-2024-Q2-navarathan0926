import React, { useState} from 'react';
import EarningForm from './EarningForm';
import Reset_icon from './../assets/images/_Link.png'
import { useSelector, useDispatch } from 'react-redux';
import  {increment, decrement, reset, incrementByAmount, setSalary} from './../features/calculator/salarySlice'



const CalculatorComponent = () => {
    const [earningSection,setEarningSection] = useState(false);
    const salary = useSelector((state) => state.salary.salary) || '';
    const dispatch = useDispatch();

    const [basicSalary, setBasicSalary] = useState(salary);

    // const addValue = Number(basicSalary) || 0;

    const resetAll = () =>{
        setBasicSalary(0);
        dispatch(reset());
    }

   

    const handleOnChange = (e) => {
        const value = Number(e.target.value) || 0;
        setBasicSalary(value);
        dispatch(setSalary(value));
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
                        value={salary} 
                        onChange={handleOnChange}
                        
                        // onChange={(e) => setBasicSalary(e.target.value)}
                    />
                    {/* <h3>{salary}</h3> */}
                    </form>
                    <h5>Earnings</h5>
                    <p className="text-secondary">
                    <small>Allowance, Fixed Allowance, Bonus, and etc.</small>
                    </p>
                    <button className="btn text-primary pb-3" onClick={()=>setEarningSection(true)}>+ Add New Allowance</button>
                       
                    <hr />
                    <h5>Deductions</h5>
                    <p>Salary Advances, Loan Deductions, and Allowance</p>
                    <button className="btn text-primary pb-3">+ Add New Deduction</button>
                </div>
                </div>
            </div>
        </div>
        {/* Earnings form */}
        {
        earningSection && (
            <EarningForm 
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleClose = {()=>setEarningSection(false)}
            // rest = {locationFormData}
            />
        )
        }
    </>
    
    
  )
}

export default CalculatorComponent;