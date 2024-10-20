import React, { useEffect } from 'react'
import { Card } from '../ui/card'
import { DotFilledIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProject, getProjectById } from '@/Redux/projectApi/Action'

const ProjectCard = ({ project, isCreator }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDelete = () => {
        dispatch(deleteProject(project.id));
    }

    return (
        <Card className="p-5 w-full lg:max-w-3xl">
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-5'>
                            <h3 onClick={() => navigate("/projects/" + project.id)} className='cursor-pointer font-bold text-lg'>{project.name}</h3>
                            <DotFilledIcon />
                            <p className='text-sm text-gray-700'>{project.category}</p>
                        </div>
                    </div>
                    <div>
                        <p className='mb-3 text-sm text-gray-800'>
                            {project.description}
                        </p>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        {
                            project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="mr-3">{tag}</Badge>
                            ))
                        }
                    </div>
                    {
                        isCreator ?
                            <div>
                                <Button size="sm" className="mr-5 mt-3">Update</Button>
                                <Button size="sm" variant="destructive" onClick={onDelete}>Delete</Button>
                            </div>
                            :
                            <></>
                    }
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard