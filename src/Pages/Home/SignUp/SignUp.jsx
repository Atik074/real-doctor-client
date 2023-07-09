import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {newUserSignUp} = useContext(AuthContext) 

const handleSingUp = (event)=>{
   event.preventDefault() ;
   const form = event.target 
   const firstName =form.fName.value 
   const lastName =form.lName.value 
   const email =form.email.value 
   const password = form.password.value 
        console.log(firstName ,lastName)
    newUserSignUp(email , password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })

    .catch(error =>{console.log(error)})

  

}

    return (
  <div className="bg-slate-300 p-20">
   <h2 className="text-center font-bold text-2xl">Please create your account here :</h2>
<form onSubmit={handleSingUp}  className="w-1/2 mx-auto">
<div className="form-control">
       <label className="label">
      <span className="label-text text-[17px]">First name</span>
       </label>
      <label className="input-group">
      <input type="text" name="fName" placeholder="type first name" className="input input-bordered w-full mb-3 " />
        </label>
        </div>
  <div className="form-control ">
       <label className="label">
      <span className="label-text text-[17px]">Last name</span>
       </label>
      <label className="input-group">
      <input type="text" name="lName" placeholder="type last name" className="input input-bordered w-full mb-3" />
        </label>
        </div>        
    <div className="form-control ">
       <label className="label">
      <span className="label-text text-[17px]">Your Email</span>
       </label>
      <label className="input-group">
      <input type="email" name="email" placeholder="type your email" className="input input-bordered w-full mb-3" />
        </label>
        </div>
        <div className="form-control mb-5">
       <label className="label">
      <span className="label-text text-[17px]">Your password</span>
       </label>
      <label className="input-group">
      <input type="password" name="password" placeholder="type your password" className="input input-bordered w-full mb-3" />
        </label>
        </div>

        <button className="bg-neutral-800	text-white text-xl  px-12 py-3 rounded mb-3"> 
              <input className="hover:text-sky-500 " type="submit" value="SignIn" />
        </button>
        <p className="mt-5  text-[18px]"> <i>Allready have an account ? </i>
          <Link className="text-red-500"to='/login'> Login</Link>
        </p>
 </form>

 </div>
     
      
    );
};

export default SignUp;