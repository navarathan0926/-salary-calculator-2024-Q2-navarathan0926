import React, {useState} from 'react'
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { earningAdded } from './earningsSlice';

const AddEarningForm = ({handleClose}) => {
    const dispatch =useDispatch();
    const [name, setName] =useState('');
    const [amount, setAmount] =useState('');
    const [epf, setEpf] =useState(false);

    const onNameChanged = e => setName(e.target.value);
    const onAmountChanged = e => setAmount(e.target.value);
    const onEpfChanged = e => setEpf(e.target.checked);

    const onSaveEarningClicked = (e) =>{
        e.preventDefault();
        if(name && amount){
            dispatch(
                earningAdded(name,amount,epf)
            )
            setName('')
            setAmount('')
            setEpf('')
            handleClose();
        }

    }

  return (
    <div className="addContainer"> 
        <form >
 
            <div className="d-flex justify-content-between align-items-center mb-1 border-bottom">
                <h4 className="my-0 small p-2">Add New Earnings</h4>
                <div className="close-btn mx-3" onClick={handleClose}>
                    <MdClose />
                </div>
            </div>
          
            <label className='text-primary px-3 mt-4' htmlFor="name">Earnings Name : </label>
            <input 
                type="text" 
                id="name" 
                className='border border-1 mx-3' 
                name="name" placeholder='Eg: Travel' 
                onChange={onNameChanged} 
            />

            
            <label className='text-primary px-3' htmlFor="amount">Amount : </label>
            <input 
                type="number" 
                id="amount" 
                name="amount"
                className='border border-1 mx-3' 
                placeholder='Eg: 10,000' 
                onChange={onAmountChanged}  
            />


            <div className="form-group d-flex align-items-center mx-3">
                <input 
                    type="checkbox" 
                    className='form-check-input blue-checkbox' 
                    name="epf" 
                    id="epf" 
                    checked={epf}
                    onChange={onEpfChanged}  
                />
                <label htmlFor="epf" className="form-check-label ml-2">EPF/ETF</label>
            </div>

            <div className="d-flex justify-content-end mt-2 border-top">
                <div className="btn mt-3 px-4 text-primary"  onClick={handleClose}>Cancel</div>
                <button 
                    className="btn btn-primary mx-3"
                    onClick={onSaveEarningClicked}
                    >Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddEarningForm