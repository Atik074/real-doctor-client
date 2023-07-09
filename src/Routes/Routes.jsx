import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/Home/SignUp/SignUp";
import SignIn from "../Pages/Home/Home/SignIn/SignIn";

const router = createBrowserRouter([

    {
      path: "/",
      element:<Main></Main>,
      children : [
          {
            path:'/' ,
            element:<Home/>
  
          },
         
    ],
    
    },
     
      {
       path:'/singUp',
       element: <SignUp></SignUp>
      },
      {
        path:'/login',
        element: <SignIn></SignIn>
       },
  ]);

  export default router ;

 