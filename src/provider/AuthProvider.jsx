import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        setLoading(true);
        signOut(auth);
    }
    const updateUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }
    const LoginUser =(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        user, 
        setUser,
        createNewUser,
        logOut,
        LoginUser,
        loading,
        updateUserProfile                                                                                                                                                      
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
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