import React, { useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../ui/dialog'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import TaskCard from './TaskCard'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'
import { DialogTitle } from '@radix-ui/react-dialog'
import AddTaskCard from './AddTaskCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasksByProjectId } from '@/Redux/taskApi/Action'
import { useParams } from 'react-router-dom'
import { store } from '@/Redux/Store'

const TaskList = ({ status, title, isCreator }) => {
    const dispatch = useDispatch();
    const { task } = useSelector(store => store);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllTasksByProjectId(id));
    }, [id]);

    return (
        <div>
            <Dialog>
                <Card className="w-full md:w-[300px] lg:w-[315px]">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2">
                        <div className='space-y-2'>
                            {
                                task.tasks.filter(task => task.status === status).map(task => (
                                    <TaskCard key={task.id} projectId={id} task={task} isCreator={isCreator} />
                                ))
                            }
                        </div>
                    </CardContent>
                    {
                        isCreator ?
                            <CardFooter>
                                <DialogTrigger>
                                    <Button className="w-full flex items-center gap-2">
                                        <PlusIcon className="w-3 h-3" />
                                        <span>Add</span>
                                    </Button>
                                </DialogTrigger>
                            </CardFooter>
                            :
                            <></>
                    }
                </Card>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Task</DialogTitle>
                    </DialogHeader>
                    <AddTaskCard status={status} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default TaskList