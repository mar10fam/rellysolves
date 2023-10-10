import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = () => {
    const { profile } = useContext(AuthContext);

    return (
        Object.keys(profile).length !== 0 ? <Outlet /> : <Navigate to='/login' /> 
    )
}

export default PrivateRoute