import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import TaskDetails from './pages/TaskDetails/TaskDetails'
import AuthPage from './pages/AuthPage/AuthPage'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from './Redux/authenticationApi/Action'
import { store } from './Redux/Store'

const App = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <div>
      {
        auth.user
          ?
          <div>
            <Navbar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Home />} />
              <Route path='/projects/:id' element={<ProjectDetails />} />
              <Route path='/projects/:projectId/:taskId' element={<TaskDetails />} />
            </Routes>
          </div>
          :
          <div>
              <AuthPage />
          </div>
      }
    </div>
  )
}

export default App