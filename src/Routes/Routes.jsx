import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/Home/SignUp/SignUp";
import SignIn from "../Pages/Home/Home/SignIn/SignIn";
import AddDoctor from "../Pages/Home/AddDoctor/AddDoctor";
import DoctorsCard from "../Pages/Home/DoctorsCard/DoctorsCard";
import DoctorService from "../Pages/Home/DoctorService/DoctorService";
import PublicOrder from "../Pages/Home/PublicOrder/PublicOrder";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([

    {
      path: "/",
      element:<Main></Main>,
      children : [
          {
            path:'/' ,
            element:<Home/>
  
          },
          {
            path:'/doctorsCard' ,
            element:<DoctorsCard/>
  
          },

          {
            path:'/singUp',
            element: <SignUp></SignUp>
           },
           {
            path:'/login',
            element: <SignIn></SignIn>
           },

           {
            path:'/addDoctor' ,
            element: <AddDoctor/>
    
           } ,
           {
            path:'/doctors/:id' ,
            element:<PrivateRoute> <DoctorService/> </PrivateRoute>     ,
            loader : ({params})=> fetch(`https://real-doctor-server.vercel.app/doctors/${params.id}`)
           } ,
           {
            path:'/orders' ,
           element:<PrivateRoute><PublicOrder></PublicOrder></PrivateRoute>
           }
         
    ],
    
    },
     
    
    
     
  ]);

  export default router ;

 