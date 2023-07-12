
const DoctorCard = ({doctor}) => {
     const {name ,img ,degree ,service,hospitalName} =  doctor
    return (
        <div>
         <div className="card card-side bg-base-100 bg-cyan-600 text-white shadow-xl ">
  <figure><img src={img} alt="picture" className="rounded"/></figure>
  <div className="card-body">
    <h2 className="card-title text-xl">Name : {name}</h2>
    <div className="text-[18px]">
      <p>Degree : {degree}</p>
      <p>Specialist : {service}</p>
      <p>Hospital Name : {hospitalName}</p>
    </div>
      
    <div className="">
      <button className="btn bg-cyan-500 text-[19px] capitalize text-white hover:bg-sky-700 ">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DoctorCard;