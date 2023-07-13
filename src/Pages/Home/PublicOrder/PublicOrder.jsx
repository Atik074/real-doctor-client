import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import OrderRow from "./OrderRow";

const PublicOrder = () => {
    const {user} = useContext(AuthContext)
    const [orders , setOrders] =useState([])

    const handleDelete = id =>{
      const proceed = confirm('Are you sure ?')
      if(proceed){
        fetch(`http://localhost:5000/orders/${id}` ,
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
 

    const url = `http://localhost:5000/orders?email=${user?.email}`  
 
      useEffect(()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setOrders(data)
        })
      },[])

   
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
        
        ></OrderRow>)
       }
     
     
    </tbody>

    
  </table>
</div>

        </div>
    );
};

export default PublicOrder;