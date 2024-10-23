import SignIn from '@/components/Auth/SignIn';
import SignUp from '@/components/Auth/SignUp';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className='flex mt-[10%] justify-center'>
      <div className='h-[45%] w-[30rem]'>
        <div>
          <div className='w-full px-10 space-y-5'>
            {
              !isSignUp ? <SignUp /> : <SignIn />
            }
            <div>          
              <span>{!isSignUp ? "Already have an account?" : "Don't have an account? Create account"}</span>
              <Button onClick={() => setIsSignUp(!isSignUp)} className="ml-3" variant="ghost">{isSignUp ? "Sign Up" : "Sign In"}</Button>            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage