import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import CreateProjectCard from '../Project/CreateProjectCard'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/Redux/authenticationApi/Action'

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store);

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div className='border-b py-4 px-5 flex items-center justify-between'>
            <div className='flex items-center gap-7'>
                <h3 onClick={() => navigate("/")} className='cursor-pointer'>Jeen</h3>
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
                        <DropdownMenuItem onClick={onLogout}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <h3>{auth.user.fullName}</h3>
            </div>
        </div>
    )
}

export default Navbar