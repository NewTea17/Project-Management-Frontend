import { getUserProfile } from '@/Redux/authenticationApi/Action';
import { getAllProjects } from '@/Redux/projectApi/Action';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AuthPage from '../AuthPage/AuthPage';

const Home = () => {
  return (
    <div className='flex items-center justify-around h-[70%] mt-20'>
      <div className='p-10'>
        <h1 className='text-[36px]'>Jeen</h1>
        <h2 className='mt-4 text-[24px]'>
          Create a lot of projects by free. Jeen will make your job easier.
        </h2>
        <h2 className='mt-2 text-[20px]'>
          Jeen allows you to create a project, add a task, invite a team member.
        </h2>
      </div>

      <div className='bg-gray-50 rounded-md'>
        <AuthPage />
      </div>
    </div>
  )
}

export default Home