import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SignIn = () => {
    const { SignInUser  } = useContext(AuthContext) 

    const handleSignIn =(event) =>{
         event.preventDefault() ;
        const form = event.target 
        const email =form.email.value 
        const password = form.password.value 

      SignInUser(email, password)
         .then(result =>{
            const user = result.user
            console.log(user)
         })
         .catch(error =>{
            console.log(error)
          
           
         })

    }

 


    return (
        <div className="bg-slate-300 p-20">
   <h2 className=" font-bold text-2xl">Login here to see more :</h2>


<form  onSubmit={handleSignIn} className="w-full">
    <div className="form-control ">
       <label className="label">
      <span className="label-text text-[17px]">Your Email</span>
       </label>
      <label className="input-group">
      <input type="email" name="email" placeholder="type your email" className="input input-bordered w-80 mb-3" />
        </label>
        </div>
        <div className="form-control mb-5">
       <label className="label">
      <span className="label-text text-[17px]">Your password</span>
       </label>
      <label className="input-group">
      <input type="password" name="password" placeholder="type your password" className="input input-bordered w-80" />
        </label>
        </div>

       <button className="btn btn-neutral text-xl px-7 mb-2">
           <input className="hover:text-sky-500" type="submit" value="Login" />
        </button> 
        <p className="mt-5  text-[18px]"> <i> New user ? please </i>
          <Link className="text-red-500"to='/singUp'>SignUp</Link>
        </p>
     
 </form>

 </div>
    );
};

export default SignIn;