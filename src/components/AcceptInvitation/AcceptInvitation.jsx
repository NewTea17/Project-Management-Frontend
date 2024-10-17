import React from 'react'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { acceptInvitation } from '@/Redux/projectApi/Action';
import { useLocation, useNavigate } from 'react-router-dom';

const AcceptInvitation = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onAcceptInvitation = (e) => {
        const urlParams = new URLSearchParams(location.search);
        const token = urlParams.get('token');

        dispatch(acceptInvitation({
            token,
            navigate
        }));
    }

    return (
        <div className='h-[70%] flex items-center justify-center'>
            <h1 className='py-5 mr-5'>You are on accept invitation page</h1>
            <Button onClick={onAcceptInvitation}>Accept</Button>
        </div>
    )
}

export default AcceptInvitation