import React from 'react'
import { Card } from '../ui/card'
import { DotFilledIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

const ProjectCard = () => {
    return (
        <Card className="p-5 w-full lg:max-w-3xl">
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-5'>
                            <h3 className='cursor-pointer font-bold text-lg'>Test Project Name</h3>
                            <DotFilledIcon />
                            <p className='text-sm text-gray-700'>UI/UX</p>
                        </div>
                    </div>
                    <div>
                        <p className='mb-3 text-sm text-gray-800'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        {
                            [1, 2, 3, 4].map((item) => (
                                <Badge key={item} variant="secondary" className="mr-3">test tag</Badge>
                            ))
                        }
                    </div>
                    <div>
                        <Button size="sm" className="mr-5 mt-3">Update</Button>
                        <Button size="sm" variant="destructive">Delete</Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard