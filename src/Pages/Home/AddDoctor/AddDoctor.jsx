
const AddDoctor = () => { 



const handleAddDoctor =(event) =>{
    event.preventDefault()
    const form = event.target 
    const name = form.name.value 
    const degree = form.degree.value 
    const service = form.service.value 
    const hospitalName = form.hospitalName.value 
    const img = form.img.value 
    const price = form.number.value 
    const doctorDetails = {name ,degree,service,hospitalName,img,price
    }
     console.log(doctorDetails)
    
     fetch('http://localhost:5000/doctors' ,{
      method:"POST" ,
      headers:{
        'content-type' : 'application/json'
      } ,
      body:JSON.stringify(doctorDetails)
     })
     .then(res =>res.json())
     .then(data =>{
        console.log(data)

     })
      form.reset()
    }
    
    return (
        <div className="bg-slate-500 p-20">
    <h2 className="text-center font-bold text-2xl text-white">Please add our new doctor details :</h2>

   <form onSubmit={handleAddDoctor}  className="w-1/2 mx-auto">
   
   <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-[18px]  text-white">Dr. Name</span>
       </label>
      <label className="input-group">
      <input type="text" name="name" placeholder="doctor name" className="input input-bordered w-full " />
        </label>
        </div>
  <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-[18px]  text-white">Degree</span>
       </label>
      <label className="input-group">
      <input type="text" name="degree" placeholder="degree name" className="input input-bordered w-full" />
        </label>
        </div>        
    <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-[18px]  text-white">Services </span>
       </label>
      <label className="input-group">
      <input type="text" name="service" placeholder="Service name" className="input input-bordered w-full" />
        </label>
        </div>
      
     <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-[18px]  text-white">Hospital Name</span>
       </label>
      <label className="input-group">
      <input type="text" name="hospitalName" placeholder="hospital name" className="input input-bordered w-full" />
        </label>
        </div>
    <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-[18px]  text-white">Image</span>
       </label>
      <label className="input-group">
      <input type="url" name="img" placeholder="image url" className="input input-bordered w-full mb-3" />
        </label>
        </div>
    <div className="form-control ">
       <label className="label">
      <span className="label-text text-[18px]  text-white">Visit</span>
       </label>
      <label className="input-group">
      <input type="number" name="number" placeholder="price" className="input input-bordered w-full mb-3" />
        </label>
        </div>
      

        <button className="bg-neutral-800	text-white text-xl  px-10 py-3 rounded mb-3"> 
              <input className="hover:text-sky-500 " type="submit" value="Add" />
        </button>
       
 </form>

 </div>
    );
};

export default AddDoctor;