import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { DotsVerticalIcon, PersonIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback } from '../ui/avatar'
import UserList from '../User/UserList'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/Redux/Store'
import { deleteTask, getAllTasksByProjectId, updateTaskStatus } from '@/Redux/taskApi/Action'

const TaskCard = ({ projectId, task, isCreator }) => {
    const { project } = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onUpdateTaskStatus = (status) => {
        dispatch(updateTaskStatus({ id: task.id, status }));
    }

    const onTaskDelete = () => {
        dispatch(deleteTask(task.id));
    }

    useEffect(() => {
        dispatch(getAllTasksByProjectId(project.id));
    }, [project])

    return (
        <Card className="rounded-md py-1 pb-2">
            <CardHeader className="py-0 pb-1">
                <div className='flex items-center justify-between'>
                    <CardTitle className="cursor-pointer" onClick={() => navigate(`/projects/${projectId}/${task.id}`)}>{task.title}</CardTitle>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button className="rounded-full" size="icon" variant="ghost">
                                <DotsVerticalIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => onUpdateTaskStatus("in_progress")}>In Progress</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onUpdateTaskStatus("done")}>Done</DropdownMenuItem>
                            {
                                isCreator ?
                                    <>
                                        <DropdownMenuItem onClick={onTaskDelete}>Delete</DropdownMenuItem>
                                    </>
                                    : <></>
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent className="py-0">
                <div className='flex items-center justify-between'>
                    <p>Count - {project.projectDetails?.team.length}</p>
                    <DropdownMenu className="w-[30rem]">
                        <DropdownMenuTrigger>
                            <Button size="icon" className="rounded-full text-black hover:text-gray-400">
                                <Avatar>
                                    <AvatarFallback>
                                        <PersonIcon />
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <UserList taskDetails={task} isCreator={isCreator} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardContent>
        </Card>
    )
}

export default TaskCard