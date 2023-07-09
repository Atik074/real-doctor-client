import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user,signOutUser} = useContext(AuthContext)

  // logOut user
  const logOutUser =() =>{
    signOutUser()
  }


    return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link className="text-3xl font-bold text-cyan-400">Real <span className="text-sky-400">-Doctor</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 text-[19px]">
      <Link className="mr-10" to='/'>Home</Link>
      <Link className="mr-10" to='/service' >Service</Link>
      <Link className="mr-10" to='/about' >About</Link>
      <Link className="mr-10" to='/blog'>Blog</Link>
  
    </ul>
  </div>
  <div className="navbar-end text-[19px]">
  <div className="w-30  rounded-full">
    
     { user ? <>
              <button onClick={logOutUser}>
                  <Link to=''>Logout</Link>
              </button>
              
               </> : 
           <>
            <Link to='/singUp'>Sign up</Link>
            </> } 
              
    </div>
           
         
        
  </div>
</div>
      
    );
};

export default Navbar;