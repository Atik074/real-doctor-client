import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const DoctorService = () => {
    const Doctorservice = useLoaderData()
    const {user} = useContext(AuthContext)
    const {  img, name , service ,price} = Doctorservice
    console.log(service)

    const handleDoctorService =(event) =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const serviceName = form.service.value 
        const email = form.email.value 
         const price = form.price.value 
         const number = form.number.value 
         const date = form.date.value 
        const customerOrders = {
           displayName: name ,
          number : number,
           serviceName,
           email,
           img , 
           price: price ,
             date
        }
         console.log(customerOrders)

         fetch('http://localhost:5000/orders' ,{
            method:'POST',
             headers:{
            'content-type' : 'application/json'
          } ,
          body:JSON.stringify(customerOrders)
         })

         .then(res =>res.json()) 
         .then(data =>{
            console.log(data)
         })
        
        
        }


    return (
        <div className="bg-slate-500 p-20">
        <h2 className="text-center font-bold text-2xl text-white">Our doctor services :</h2>
    
       <form onSubmit={handleDoctorService}  className="w-1/2 mx-auto">
       
       <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-[18px]  text-white">Name</span>
           </label>
          <label className="input-group">
          <input type="text" defaultValue={user?.name} name="name" placeholder=" name" className="input input-bordered w-full " />
            </label>
            </div>
   
        <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-[18px]  text-white">Services </span>
           </label>
          <label className="input-group">
          <input type="text" defaultValue={service} name="service" placeholder="Service name" className="input input-bordered w-full" />
            </label>
            </div>
          
         <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-[18px]  text-white">Your email </span>
           </label>
          <label className="input-group">
          <input type="email" defaultValue={user?.email}  name="email" placeholder="email" className="input input-bordered w-full" />
            </label>
            </div>
         <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-[18px]  text-white">Your number</span>
           </label>
          <label className="input-group">
          <input type="number" name="number" placeholder="phone number" className="input input-bordered w-full" />
            </label>
            </div>

      
        <div className="form-control ">
           <label className="label">
          <span className="label-text text-[18px]  text-white">Date</span>
           </label>
          <label className="input-group">
          <input type="date" name="date" placeholder="price" className="input input-bordered w-full mb-3" />
            </label>
            </div>
        <div className="form-control ">
           <label className="label">
          <span className="label-text text-[18px]  text-white">Visit</span>
           </label>
          <label className="input-group">
          <input type="number" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full mb-3" />
            </label>
            </div>
          
    
            <button className="bg-neutral-800 mt-2	text-white text-xl  px-10 py-3 rounded mb-3"> 
                  <input className="hover:text-sky-500  " type="submit" value="Confirm" />
            </button>
           
     </form>
    
     </div>
    );
};

export default DoctorService;