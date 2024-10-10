import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { TrashIcon } from 'lucide-react'

const CommentCard = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
                <Avatar>
                    <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div className='space-y-1'>
                    <h2>Test User</h2>
                    <h3>Test comment from Test User</h3>
                </div>
            </div>
            <Button className="rounded-full w-4 h-4" size="icon" variant="ghost">
                <TrashIcon />
            </Button>
        </div>
    )
}

export default CommentCard