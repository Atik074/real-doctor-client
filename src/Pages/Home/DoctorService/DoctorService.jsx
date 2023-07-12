import { useLoaderData } from "react-router-dom";

const DoctorService = () => {
    const service = useLoaderData()
    console.log(service)
    return (
        <div>
           hellow 
        </div>
    );
};

export default DoctorService;