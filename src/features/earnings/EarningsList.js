import { useSelector } from "react-redux";
import { useState } from "react";
import { selectAllEarnings, earningRemoved } from "./earningsSlice";
import { MdClose , MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import Epf_icon  from './../../assets/images/frame.png'
import EditEarningForm from "./EditEarningForm";



const EarningsList = () => {
    const [editEarningSection,setEditEarningSection] = useState(false);
    const [editItem, setEditItem ] = useState({
        id:'',
        name:'',
        amount:0.00,
        epf:false
    });
    const earnings = useSelector(selectAllEarnings);
    const dispatch = useDispatch();
    

    const handleRemove = (id) => {
        dispatch(earningRemoved({ id }));
    };

    const handleEdit = (item) =>{
        setEditEarningSection(true);
        setEditItem({
            id:item.id,
            name:item.name,
            amount:item.amount,
            epf:item.epf,
        });
    }

    const renderedEarnings = earnings.map(earning=>(

            <article key={earning.id}>
                <div className="d-flex align-items-center ">
                    <p className="small mx-1 px-1">
                        {earning.name}: 
                        {earning.amount} 
                        {
                            earning.epf && (
                                <img className="px-2" src={Epf_icon} alt="" />
                            )
                        }
                        <span> | </span>  
                    </p>
                    <button className="btn btn-light btn-sm rounded-circle mb-3" onClick={(e)=>handleEdit(earning)}><MdEdit /></button>
                    <button className="btn btn-light btn-sm rounded-circle mb-3" onClick={(e) => handleRemove(earning.id)}><MdClose /></button>
                    
                </div>
            
            </article>
            
       
    ))
  return (
    <section>
        {/* <h2>Earnings</h2> */}
        {renderedEarnings}
        {
            editEarningSection && (
                <EditEarningForm
                    handleClose = {()=>setEditEarningSection(false)}
                    operation='Update'
                    key={editItem.id}
                    earning={editItem}
                    heading="Update Earnings"
                />
            )
        }
    </section>
  )
}

export default EarningsList