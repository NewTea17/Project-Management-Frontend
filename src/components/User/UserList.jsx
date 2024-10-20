import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/Redux/Store'
import { assigneeUserToTask, getTaskById } from '@/Redux/taskApi/Action'

const UserList = ({ taskDetails, isCreator }) => {
  const dispatch = useDispatch();
  const { project } = useSelector(store => store);

  const setAssigneeOfTask = (userId) => {
    if(isCreator) {
      dispatch(assigneeUserToTask({ taskId: taskDetails?.id, userId: userId }));
    }
  }

  return (
    <div>
      <div className='space-y-2'>
        <div className='border'>
          <h3 className='py-2 px-3'>{taskDetails?.assignee?.fullName || "Unresolved"}</h3>
        </div>
        {
          project.projectDetails?.team.map(user => (
            <div key={user.id} className='py-2 hover:text-gray-400 cursor-pointer flex items-center'
              onClick={() => { setAssigneeOfTask(user.id); console.log(taskDetails) }}>
              <Avatar className="mr-4">
                <AvatarFallback>
                  {user.fullName[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className='space-y-1'>
                <h4 className='text-sm'>{user.fullName}</h4>
                <h4 className='text-sm text-muted-foreground'>{user.email}</h4>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UserList