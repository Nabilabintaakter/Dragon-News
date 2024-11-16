import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../layout/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <Loading></Loading>
    }
    else if(user && user?.email){
        return children;
    }
    else return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;