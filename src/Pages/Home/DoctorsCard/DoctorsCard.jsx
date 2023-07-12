import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

const DoctorsCard = () => {
  const [doctors , setDoctors] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/doctors')
    .then(res => res.json()) 
    .then(data =>{
      console.log(data)
      setDoctors(data)
    })
  },[])
 
    return (
        <div className="grid grid-cols-3 gap-8 my-16">
          {
            doctors.map(doctor =><DoctorCard
            key={doctor._id}
            doctor ={doctor}
            >

            </DoctorCard>)
          }
        </div>
    );
};

export default DoctorsCard;