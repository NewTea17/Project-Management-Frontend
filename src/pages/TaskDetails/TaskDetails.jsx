import CreateCommentCard from '@/components/Comment/CreateCommentCard';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetails = () => {
    const { projectId, taskId } = useParams();

    return (
        <div className='px-20 py-5'>
            <div className='flex justify-between border p-10 rounded-lg'>
                <ScrollArea className="h-[70vh] w-[60%]">
                    <div>
                        <h1 className='text-lg pb-2'>Test task</h1>
                    </div>
                    <div>
                        <p className='w-full md:max-w-lg lg:max-w-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            </TabsContent>
                            <TabsContent value="history">
                                
                            </TabsContent>
                        </Tabs>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default TaskDetails