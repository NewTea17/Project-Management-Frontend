import React, { useEffect, useState } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getChatByProjectId, getChatMessages, sendMessage } from '@/Redux/chatApi/Action'
import { useParams } from 'react-router-dom'

const ChatBox = () => {
  const dispatch = useDispatch();
  const { auth, chat } = useSelector(store => store);
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const handleMessageEnter = (e) => {
    setMessage(e.target.value);
  }

  const handleSend = (e) => {
    dispatch(sendMessage({
      senderId: auth.user?.id,
      projectId: id,
      content: message
    }));
  }

  useEffect(() => {
    dispatch(getChatByProjectId(id));
    dispatch(getChatMessages(id));
  }, [])

  return (
    <div className='sticky'>
      <div className='border'>
        <h1 className='border-b p-5'>Chat</h1>
        <ScrollArea className="h-[70vh] w-full p-5 flex gap-2 flex-col">
          {
            chat.messages?.map((message) => (
              message.sender?.id != auth.user?.id ?
                <div key={message.id} className='flex gap-2 mb-2 rounded-full justify-start'>
                  <Avatar>
                    <AvatarFallback>{message.sender?.fullName[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className='space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl'>
                    <h3>{message.sender?.fullName}r</h3>
                    <p>{message.content}</p>
                  </div>
                </div>
                :
                <div key={message} className='flex gap-2 mb-2 rounded-full justify-end'>
                  <div className='space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl'>
                    <h3>{message.sender?.fullName}r</h3>
                    <p>{message.content}</p>
                  </div>
                  <Avatar>
                    <AvatarFallback>{message.sender?.fullName[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                </div>
            ))
          }
        </ScrollArea>
        <div className='relative p-0'>
          <Input
            value={message}
            onChange={handleMessageEnter}
            placeholder="Your message ..."
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
          />
          <Button onClick={handleSend} className="absolute right-2 top-3 rounded-full" size="icon" variant="ghost">
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox