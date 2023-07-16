import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import OrderRow from "./OrderRow";
import { useNavigate } from "react-router-dom";

const PublicOrder = () => {
    const {user} = useContext(AuthContext)
    const [orders , setOrders] =useState([])
    const navigate = useNavigate()


    
    const url = `https://real-doctor-server.vercel.app/orders?email=${user?.email}`  
 
      useEffect(()=>{
        fetch(url ,{
          method:'GET' ,
          headers:{
            authorization : `Bearer ${localStorage.getItem('doctor-token')}`
          }
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(!data.error){
              setOrders(data)
            }
            else{
                navigate('/')
            }
           
        })
      },[url])

// order data delete
    const handleDelete = id =>{
      const proceed = confirm('Are you sure ?')
      if(proceed){
        fetch(`https://real-doctor-server.vercel.app/orders/${id}` ,
        {
            method:'DELETE',
            
        })
        .then(res =>res.json()) 
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
              alert('delete successfull')
              const remaining = orders.filter(order => order._id !== id) 
              setOrders(remaining)
            }
        })
      }
}

// order data update 
 const handleUpdate = id =>{
      fetch(`https://real-doctor-server.vercel.app/orders/${id}`,{
        method: 'PUT' ,
        headers:{
          'content-type' :'application/json'
        } ,
        body:JSON.stringify({status:'confirm'})
      })
      .then(res =>res.json()) 
      .then(data =>{
        console.log(data)
        if(data.modifiedCount > 0){
             alert('update succesfull')
             const remaining = orders.filter(order => order._id !== id)
             const update = orders.find(order => order._id === id) 
               update.status = 'confirm' 
               const newOrders =[update, ...remaining]
               setOrders(newOrders)
        }
      })
 } 
 
// update end 



   
    return (
        <div>

           <div className="overflow-x-auto">
  <table className="table my-10">
    {/* head */}
    <thead>
      <tr className="text-xl">
        <th>Delete</th>
        <th>Name</th>
        <th>Service</th>
        <th>Visit</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
       {
        orders.map(order =><OrderRow
        key={order._id}
        order={order}
        handleDelete={handleDelete}
        handleUpdate ={handleUpdate }
        ></OrderRow>)
       }
     
     
    </tbody>

    
  </table>
</div>

        </div>
    );
};

export default PublicOrder;