import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase.config";


export const AuthContext = createContext()
   const auth = getAuth(app) 

const AuthProvider = ({children}) => {
    const [user , setUser ] = useState(null)
    const [loading , setLoading] = useState(true) 

  // new user sing up for account create
  const newUserSignUp = (email , password) =>{
     return  createUserWithEmailAndPassword(auth ,email , password)
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth , currentUser =>{
        console.log(currentUser)
        setUser(currentUser)
    })

    return () =>{
        return unsubscribe();
    }
  },[])
  
// new user for login
   const SignInUser =(email,password) =>{
   return signInWithEmailAndPassword(auth,email,password)
 }

//  logOut 
    const signOutUser =()=>{  
        signOut(auth)
 
     }
 

    const authInfo ={
           user ,
           loading,
           newUserSignUp ,
           SignInUser,
           signOutUser
         

         }


    return (
        <AuthContext.Provider    value={authInfo}>
            {children}    
        </AuthContext.Provider>
    );
};

export default AuthProvider;