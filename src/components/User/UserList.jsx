import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'

const UserList = () => {
  return (
    <div>
      <div className='space-y-2'>
        <div className='border'>
          <h3 className='py-2 px-3'>{"Test user" || "Unresolved"}</h3>
        </div>
        {
          [1, 2, 3, 4].map(user => (
            <div className='py-2 hover:text-gray-400 cursor-pointer flex items-center'>
              <Avatar className="mr-4">
                <AvatarFallback>
                  T
                </AvatarFallback>
              </Avatar>
              <div className='space-y-1'>
                <h4 className='text-sm'>Test user</h4>
                <h4 className='text-sm text-muted-foreground'>@testuser</h4>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UserList