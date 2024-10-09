import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../ui/dialog'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import TaskCard from './TaskCard'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'
import { DialogTitle } from '@radix-ui/react-dialog'
import AddTaskCard from './AddTaskCard'

const TaskList = ({ status, title }) => {
    return (
        <div>
            <Dialog>
                <Card className="w-full md:w-[300px] lg:w-[315px]">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2">
                        <div className='space-y-2'>
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <DialogTrigger>
                            <Button className="w-full flex items-center gap-2">
                                <PlusIcon className="w-3 h-3" />
                                <span>Add</span>
                            </Button>
                        </DialogTrigger>
                    </CardFooter>
                </Card>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Task</DialogTitle>
                    </DialogHeader>
                    <AddTaskCard />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default TaskList