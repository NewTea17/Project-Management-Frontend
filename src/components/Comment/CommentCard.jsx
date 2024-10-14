import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { TrashIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { deleteComment } from '@/Redux/commentApi/Action'

const CommentCard = ({ item }) => {
    const dispatch = useDispatch();

    const onCommentDelete = () => {
        dispatch(deleteComment(item.id));
    }

    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
                <Avatar>
                    <AvatarFallback>{item.user.fullName[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className='space-y-1'>
                    <h2>{item.user.fullName}</h2>
                    <h3>{item.content}</h3>
                </div>
            </div>
            <Button className="rounded-full w-4 h-4" size="icon" variant="ghost" onClick={() => onCommentDelete()}>
                <TrashIcon />
            </Button>
        </div>
    )
}

export default CommentCard