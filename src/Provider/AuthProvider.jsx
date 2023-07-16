import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";


export const AuthContext = createContext()
   const auth = getAuth(app) 
   const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user , setUser ] = useState(null)
    const [loading , setLoading] = useState(true) 

// google signIn authentication
const googleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth , googleProvider)
}


  // new user sing up for account create
  const newUserSignUp = (email , password) =>{
        setLoading(true)
     return  createUserWithEmailAndPassword(auth ,email , password)
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth , currentUser =>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)

        if(currentUser &&   currentUser.email){
            const loggedUser = {email : currentUser.email}

        fetch("https://real-doctor-server.vercel.app/jwt" ,{
               method:'POST' ,
               headers:{
                  'content-type' : 'application/json'
               },
               body:JSON.stringify(loggedUser)
            })
            .then(res =>  res.json())
            .then(data =>{ 
               console.log(data)
               localStorage.setItem('doctor-token' , data.token)
            
            })
         
        }

       else{
        localStorage.removeItem('doctor-token')
       }
    })

    return () =>{
        return unsubscribe();
    }
  },[])
  
// new user for login
   const SignInUser =(email,password) =>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
 }

//  logOut 
    const signOutUser =()=>{  
        setLoading(true)
        signOut(auth)
 
     }
 

    const authInfo ={
           user ,
           loading,
           newUserSignUp ,
           SignInUser,
           googleSignIn ,
           signOutUser
         

         }


    return (
        <AuthContext.Provider    value={authInfo}>
            {children}    
        </AuthContext.Provider>
    );
};

export default AuthProvider;