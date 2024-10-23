import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { acceptInvitation } from '@/Redux/projectApi/Action';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserProfile } from '@/Redux/authenticationApi/Action';
import { store } from '@/Redux/Store';
import AuthPage from '@/pages/AuthPage/AuthPage';

const AcceptInvitation = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector(store => store);

    useEffect(() => {
        if (!auth.currentUser && !auth.loading) {
            dispatch(getUserProfile()); 
        }
    }, [auth.currentUser, auth.loading, dispatch]);

    useEffect(() => {
        console.log("Current User:", auth.currentUser);
    }, [auth.loading, auth.currentUser, navigate])

    const onAcceptInvitation = (e) => {
        const urlParams = new URLSearchParams(location.search);
        const token = urlParams.get('token');

        dispatch(acceptInvitation({
            token,
            navigate
        }));
    }

    if (!auth.currentUser) {
        return <AuthPage />;
    }

    return (
        <div className='h-[70%] flex items-center justify-center'>
            <h1 className='py-5 mr-5'>You are on accept invitation page</h1>
            <Button onClick={onAcceptInvitation}>Accept</Button>
        </div>
    )
}

export default AcceptInvitation