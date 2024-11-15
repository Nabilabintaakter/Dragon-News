import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const createNewUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        signOut(auth);
    }
    const LoginUser =(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        user, 
        setUser,
        createNewUser,
        logOut,
        LoginUser
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;