import { Card } from '@/components/ui/card'
import React from 'react'

const ProjectList = () => {
  return (
    <div>
        <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
            <section className='filter-section'>
                <Card></Card>
            </section>
            <section className='project-list-section'>

            </section>
        </div>
    </div>
  )
}

export default ProjectList