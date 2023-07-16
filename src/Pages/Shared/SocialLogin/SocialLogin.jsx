import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="divider w-1/2 text-xl">Or</div>
            <div className="ml-20 ">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-xl">
                  G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;