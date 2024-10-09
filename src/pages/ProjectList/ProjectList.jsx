import ProjectCard from '@/components/Project/ProjectCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'

import React, { useState } from 'react'

export const tags = [
    {
        value: "all",
        name: "All"
    },
    {
        value: "react",
        name: "React"
    },
    {
        value: "angular",
        name: "Angular"
    },
    {
        value: "vue",
        name: "Vue"
    },
    {
        value: "nextjs",
        name: "NextJs"
    },
    {
        value: "redux",
        name: "Redux"
    },
    {
        value: "nodejs",
        name: "NodeJs"
    },
    {
        value: "springframework",
        name: "Spring Framework"
    },
    {
        value: "python",
        name: "Python"
    },
    {
        value: "django",
        name: "Django"
    },
    {
        value: "mysql",
        name: "MySQL"
    },
    {
        value: "postgresql",
        name: "PostgreSQL"
    },
    {
        value: "mongodb",
        name: "MongoDB"
    }
]

const ProjectList = () => {
    const [keyword, setKeyword] = useState("");

    const handleFilterChange = (section, value) => {
        console.log(section + " " + value);
    }

    const handleSearchProject = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <div>
            <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
                <section className='filter-section'>
                    <Card className="p-7 sticky top-10">
                        <div className='flex justify-between lg:w-[20rem]'>
                            <p className='text-xl tracking-wider'>filters</p>
                            <Button variant="ghost" size="icon">
                                <MixerHorizontalIcon />
                            </Button>
                        </div>
                        <CardContent className="mt-7">
                            <ScrollArea className='space-y-7 h-[70vh]'>
                                <div>
                                    <h1 className='pb-3 text-gray-700 border-b'>Category</h1>
                                    <div className='pt-5'>
                                        <RadioGroup className="space-y-3 pt-5" defaultValue='all' onValueChange={(value) => { handleFilterChange("category", value) }}>
                                            <div className='flex items-center space-x-2 gap-3'>
                                                <RadioGroupItem value='all' id='v1' />
                                                <Label htmlFor="v1">All</Label>
                                            </div>
                                            <div className='flex items-center space-x-2 gap-3'>
                                                <RadioGroupItem value='fullstack' id='v2' />
                                                <Label htmlFor="v2">Fullstack</Label>
                                            </div>
                                            <div className='flex items-center space-x-2 gap-3'>
                                                <RadioGroupItem value='frontend' id='v3' />
                                                <Label htmlFor="v3">Frontend</Label>
                                            </div>
                                            <div className='flex items-center space-x-2 gap-3'>
                                                <RadioGroupItem value='backend' id='v4' />
                                                <Label htmlFor="v4">Backend</Label>
                                            </div>
                                            <div className='flex items-center space-x-2 gap-3'>
                                                <RadioGroupItem value='ui-ux' id='v5' />
                                                <Label htmlFor="v5">UI/UX</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>

                                <div className='pt-10'>
                                    <h1 className='pb-3 text-gray-700 border-b'>Tags</h1>
                                    <div className='pt-5'>
                                        <RadioGroup className="space-y-3 pt-5" defaultValue='all' onValueChange={(value) => { handleFilterChange("tag", value) }}>
                                            {
                                                tags.map(tagItem => (
                                                    <div className='flex items-center space-x-2 gap-3'>
                                                        <RadioGroupItem value={tagItem.value} id={`v1-${tagItem.value}`} />
                                                        <Label htmlFor={`v1-${tagItem.value}`}>{tagItem.name}</Label>
                                                    </div>
                                                ))
                                            }
                                        </RadioGroup>
                                    </div>
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </section>
                <section className='project-list-section w-full lg:w-[40rem]'>
                    <div className='flex gap-2 items-center pb-5 justify-center'>
                        <div className='relative p-0 w-full'>
                            <Input className='px-8' placeholder="Search project..." onChange={handleSearchProject} />
                            <MagnifyingGlassIcon className='absolute top-3 left-3' />
                        </div>
                    </div>
                    <div>
                        <div className='space-y-5 min-h-[74vh]'>
                            {
                                !keyword ? [1, 1, 1].map(item => (
                                    <ProjectCard key={item} />
                                )) :
                                [1, 1, 1, 1].map(item => (
                                    <ProjectCard key={item} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProjectList