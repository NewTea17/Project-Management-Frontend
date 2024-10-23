import ChatBox from '@/components/Chat/ChatBox'
import TaskList from '@/components/Task/TaskList'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import InviteUserCard from '@/components/User/InviteUserCard'
import { getProjectById } from '@/Redux/projectApi/Action'
import { store } from '@/Redux/Store'
import { getAllTasksByProjectId } from '@/Redux/taskApi/Action'
import { PlusIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProjectDetail = () => {
  const dispatch = useDispatch();
  const { auth, project } = useSelector(store => store);

  const { id } = useParams();
  const [isCreator, setIsCreator] = useState(false);

  const handleProjectInvitation = (e) => {
    console.log(project);
  }

  useEffect(() => {
    dispatch(getProjectById(id));
  }, [id])

  useEffect(() => {
    if (project.projectDetails?.owner?.id === auth.currentUser?.id) {
      setIsCreator(true);
    }
  }, [project, auth])

  useEffect(() => {
    if (project.projectDetails) {
      dispatch(getAllTasksByProjectId(project.projectDetails.id)); 
    }
  }, [project.projectDetails, dispatch]);

  return (
    <div>
      <div className='mt-5 lg:px-10'>
        <div className='lg:flex gap-5 justify-between pb-4'>
          <ScrollArea className="h-screen lg:w-[70%] pr-2">
            <div className='pb-5 w-full'>
              <h1 className='text-lg pb-2'>{project.projectDetails?.name}</h1>
              <div className='space-y-5 pb-10'>
                <p className='w-full md:max-w-lg lg:max-w-xl'>
                  {project.projectDetails?.description}
                </p>
                <div className='flex'>
                  <p className='w-44'>Creator: </p>
                  <p>{project.projectDetails?.owner.fullName}</p>
                </div>
                <div className='flex'>
                  <p className='w-44'>Members: </p>
                  <div className='flex items-center gap-2'>
                    {
                      project.projectDetails?.team.map(user => (
                        <Avatar className="cursor-pointer" key={user}>
                          <AvatarFallback>{user.fullName[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                      ))
                    }
                  </div>
                  {
                    isCreator ?
                      <Dialog>
                        <DialogTrigger>
                          <DialogClose>
                            <Button size="sm" className="ml-6" onClick={handleProjectInvitation}>
                              <span>invite</span>
                              <PlusIcon className='w-3 h-3' />
                            </Button>
                          </DialogClose>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            Invite User
                            <InviteUserCard />
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      :
                      <></>
                  }
                </div>
                <div className='flex'>
                  <p className='w-44'>Category: </p>
                  <p>{project.projectDetails?.category}</p>
                </div>
              </div>
              <section>
                <p className='py-5 border-b text-lg -tracking-wider'>Tasks</p>
                <div className="lg:flex md: flex gap-4 justify-between py-5">
                  <TaskList status="to_do" title="To Do" isCreator={isCreator} />
                  <TaskList status="in_progress" title="In Progress" isCreator={isCreator} />
                  <TaskList status="done" title="Done" isCreator={isCreator} />
                </div>
              </section>
            </div>
          </ScrollArea>
          <div className='lg:w-[30%] sticky right-5 top-10'>
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail