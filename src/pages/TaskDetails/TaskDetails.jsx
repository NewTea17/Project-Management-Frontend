import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetails = () => {
    const { projectId, taskId } = useParams();

    return (
        <div className='py-5'>
            <div className='flex justify-between border m-10 rounded-lg'>

            </div>
        </div>
    )
}

export default TaskDetails