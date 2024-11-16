import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [latest, setLatest] = useState(null);

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
    const LoginWithGoogle =()=>{
        setLoading(true);
       return signInWithPopup(auth, googleProvider)
    }
    const LoginWithGithub =()=>{
        setLoading(true);
       return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        user, 
        setUser,
        createNewUser,
        logOut,
        LoginUser,
        loading,
        updateUserProfile,
        LoginWithGoogle,
        LoginWithGithub,
        latest,
        setLatest                                                                                                                                                   
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