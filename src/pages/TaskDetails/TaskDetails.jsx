import CommentCard from '@/components/Comment/CommentCard';
import CreateCommentCard from '@/components/Comment/CreateCommentCard';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getTaskById, updateTaskStatus } from '@/Redux/taskApi/Action';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const TaskDetails = () => {
    const dispatch = useDispatch();
    const { task } = useSelector(store => store);
    const { projectId, taskId } = useParams();

    useEffect(() => {
        dispatch(getTaskById(taskId));
    }, [taskId])

    const onUpdateTaskStatus = (status) => {
        dispatch(updateTaskStatus({ id: taskId, status }));
    }

    return (
        <div className='px-20 py-5'>
            <div className='flex justify-between border p-10 rounded-lg gap-7'>
                <ScrollArea className="h-[70vh] w-[45%]">
                    <div>
                        <h1 className='text-lg pb-2'>{task.taskDetails?.title}</h1>
                    </div>
                    <div>
                        <p className='w-full md:max-w-lg lg:max-w-xl'>
                            {task.taskDetails?.description}
                        </p>
                    </div>
                    <div className='mt-5'>
                        <h2 className='pb-3'>Activity</h2>
                        <Tabs defaultValue='all' className='w-[350px]'>
                            <TabsList className="mb-5">
                                <TabsTrigger value="all">
                                    All
                                </TabsTrigger>
                                <TabsTrigger value="comments">
                                    Comments
                                </TabsTrigger>
                                <TabsTrigger value="history">
                                    History
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="all">

                            </TabsContent>
                            <TabsContent value="comments">
                                <CreateCommentCard taskId={taskId} />
                                <div className='mt-8 space-y-6'>
                                    {/* {
                                        task.taskDetails.comments.map((comment) => (
                                            <CommentCard key={comment.id} />
                                        ))
                                    } */}
                                </div>
                            </TabsContent>
                            <TabsContent value="history">

                            </TabsContent>
                        </Tabs>
                    </div>
                </ScrollArea>
                <div className='w-full lg:w-[55%] space-y-2'>
                    <Select
                        onValueChange={onUpdateTaskStatus}
                    >
                        <SelectTrigger className="w-[20rem]">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="to-do">To Do</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="done">Done</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className='border rounded-lg'>
                        <p className='border-b py-5 px-5'>Details</p>
                        <div className='p-5'>
                            <div className='space-y-5'>
                                <div className='flex items-center gap-7'>
                                    <h3 className='w-[20rem]'>Assignee</h3>
                                    <div className='flex items-center gap-3'>
                                        {
                                            task.taskDetails?.assignee?.fullName
                                                ?
                                                <>
                                                    <Avatar>
                                                        <AvatarFallback>{task.taskDetails?.assignee?.fullName[0].toUpperCase()}</AvatarFallback>
                                                    </Avatar>
                                                    <h4>{task.taskDetails?.assignee?.fullName}</h4>
                                                </>
                                                :
                                                "None"
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <div className='space-y-5'>
                                <div className='flex items-center gap-7'>
                                    <h3 className='w-[20rem]'>Labels</h3>
                                    <div className='flex items-center gap-3'>
                                        <h4>None</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <div className='space-y-5'>
                                <div className='flex items-center gap-7'>
                                    <h3 className='w-[20rem]'>Status</h3>
                                    <div className='flex items-center gap-3'>
                                        <Badge>
                                            {task.taskDetails?.status}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <div className='space-y-5'>
                                <div className='flex items-center gap-7'>
                                    <h3 className='w-[20rem]'>Due Date</h3>
                                    <div className='flex items-center gap-3'>
                                        <h4>{task.taskDetails?.dueDate}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <div className='space-y-5'>
                                <div className='flex items-center gap-7'>
                                    <h3 className='w-[20rem]'>Creator</h3>
                                    <div className='flex items-center gap-3'>
                                        <Avatar>
                                            <AvatarFallback>T</AvatarFallback>
                                        </Avatar>
                                        <h4>Test Creator User</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskDetails