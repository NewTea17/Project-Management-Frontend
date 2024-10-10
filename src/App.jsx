import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import TaskDetails from './pages/TaskDetails/TaskDetails'
import AuthPage from './pages/AuthPage/AuthPage'

const App = () => {
  return (
    <div>

      {
        true
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