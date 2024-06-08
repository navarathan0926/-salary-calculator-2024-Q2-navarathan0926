import { useSelector } from "react-redux";
import { useState } from "react";
import { selectAllDeductions, deductionRemoved } from "./deductionsSlice";
import { MdClose , MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import Epf_icon  from './../../assets/images/frame.png'
import EditDeductionForm from "./EditDeductionForm";


const DeductionsList = () => {
    const [editDeductionSection,setEditDeductionSection] = useState(false);
    const [editItem, setEditItem ] = useState({
        id:'',
        name:'',
        amount:0.00,
        epf:false
    });
    const deductions = useSelector(selectAllDeductions);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(deductionRemoved({ id }));
    };

    const handleEdit = (item) =>{
        setEditDeductionSection(true);
        setEditItem({
            id:item.id,
            name:item.name,
            amount:item.amount,
            epf:item.epf,
        });
    }

    const renderedDeductions = deductions.map(deduction=>(

        <article key={deduction.id}>
            <div className="d-flex align-items-center">
                <p className="small mx-1 px-1">
                    {deduction.name}: 
                    {deduction.amount} 
                    {
                        deduction.epf && (
                            <img className="px-2" src={Epf_icon} alt="" />
                        )
                    }
                    <span> | </span>   
                </p>
                <button className="btn btn-light btn-sm rounded-circle mb-3" onClick={(e)=>handleEdit(deduction)}><MdEdit /></button>
                <button className="btn btn-light btn-sm rounded-circle mb-3" onClick={(e) => handleRemove(deduction.id)}><MdClose /></button>   
            </div>
        </article>
        
   
))
  return (
    <section>
        {renderedDeductions}
        {
            editDeductionSection && (
                <EditDeductionForm
                    handleClose = {()=>setEditDeductionSection(false)}
                    operation='Update'
                    key={editItem.id}
                    deduction={editItem}
                    heading="Update Deductions"
                />
            )
        }
    </section>
  )
}

export default DeductionsList