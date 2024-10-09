import ChatBox from '@/components/Chat/ChatBox'
import TaskList from '@/components/Task/TaskList'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import InviteUserCard from '@/components/User/InviteUserCard'
import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

const ProjectDetail = () => {
  const handleProjectInvitation = (e) => {

  }

  return (
    <div>
      <div className='mt-5 lg:px-10'>
        <div className='lg:flex gap-5 justify-between pb-4'>
          <ScrollArea className="h-screen lg:w-[70%] pr-2">
            <div className='pb-5 w-full'>
              <h1 className='text-lg pb-2'>Test Project Name</h1>
              <div className='space-y-5 pb-10'>
                <p className='w-full md:max-w-lg lg:max-w-xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className='flex'>
                  <p className='w-44'>Creator: </p>
                  <p>test user</p>
                </div>
                <div className='flex'>
                  <p className='w-44'>Members: </p>
                  <div className='flex items-center gap-2'>
                    {
                      [1, 2, 3].map(item => (
                        <Avatar className="cursor-pointer" key={item}>
                          <AvatarFallback>T</AvatarFallback>
                        </Avatar>
                      ))
                    }
                  </div>
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
                </div>
                <div className='flex'>
                  <p className='w-44'>Category: </p>
                  <p>UI/UX</p>
                </div>
                <div className='flex'>
                  <p className='w-44'>Status: </p>
                  <Badge>In progress</Badge>
                </div>
              </div>
              <section>
                <p className='py-5 border-b text-lg -tracking-wider'>Tasks</p>
                <div className="lg:flex md: flex gap-4 justify-between py-5">
                  <TaskList status="to_do" title="To Do" />
                  <TaskList status="in_progress" title="In Progress" />
                  <TaskList status="done" title="Done" />
                </div>
              </section>
            </div>
          </ScrollArea>
          <ChatBox />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail