import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const PublicOrder = () => {
    const {user} = useContext(AuthContext)
    const [orders ,setOrders] =useState([])
 

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
             data count are {orders.length}
        </div>
    );
};

export default PublicOrder;