import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import CreateProjectCard from '../Project/CreateProjectCard'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'

const Navbar = () => {
    return (
        <div className='border-b py-4 px-5 flex items-center justify-between'>
            <div className='flex items-center gap-7'>
                <h3 className='cursor-pointer'>Jeen</h3>
                <Dialog>
                    <DialogTrigger>
                        <Button>New Project</Button>
                    </DialogTrigger>                  
                    <DialogContent>   
                        <DialogHeader>Create New Project</DialogHeader>
                        <CreateProjectCard />
                    </DialogContent>
                </Dialog>
            </div>
            <div className='flex items-center gap-2'>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className="rounded-full">
                            <PersonIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <h3>test user</h3>
            </div>
        </div>
    )
}

export default Navbar