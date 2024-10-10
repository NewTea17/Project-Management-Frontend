import React, { useState } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { PaperPlaneIcon } from '@radix-ui/react-icons'

const ChatBox = () => {
  const [message, setMessage] = useState("");

  const handleMessageEnter = (e) => {
    setMessage(e.target.value);
  }

  const handleSend = (e) => {

  }

  return (
    <div className='sticky'>
      <div className='border'>
        <h1 className='border-b p-5'>Chat</h1>
        <ScrollArea className="h-[70vh] w-full p-5 flex gap-2 flex-col">
          {
            [1, 2, 3, 4, 5, 6].map((message, index) => (
              index % 2 == 0 ?
                <div key={message} className='flex gap-2 mb-2 rounded-full justify-start'>
                  <Avatar>
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  <div className='space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl'>
                    <h3>Test user</h3>
                    <p>It is first message in chat</p>
                  </div>
                </div>
                :
                <div key={message} className='flex gap-2 mb-2 rounded-full justify-end'>
                  <div className='space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl'>
                    <h3>Test user</h3>
                    <p>It is first message in chat</p>
                  </div>
                  <Avatar>
                    <AvatarFallback>T</AvatarFallback>
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