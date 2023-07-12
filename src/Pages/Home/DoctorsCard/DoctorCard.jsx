import { Link } from "react-router-dom";

const DoctorCard = ({doctor}) => {
     const {_id ,name ,img ,degree ,service,hospitalName} =  doctor
   
     const handleService =id =>{
      console.log(id)
    }



    return (
        <div>
         <div className="card card-side  bg-cyan-600 text-white shadow-xl ">
  <figure><img src={img} alt="picture" className="rounded"/></figure>
  <div className="card-body">
    <h2 className="card-title text-xl">Name : {name}</h2>
    <div className="text-[18px]">
      <p>Degree : {degree}</p>
      <p>Specialist : {service}</p>
      <p>Hospital Name : {hospitalName}</p>
    </div>
      
    <div className="">
      <Link to={`/doctors/${_id}`}>
      <button onClick={()=>handleService(_id)} className="btn bg-cyan-500 text-[19px] capitalize text-white hover:bg-sky-700 ">Book NOw</button>
      </Link>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default DoctorCard;