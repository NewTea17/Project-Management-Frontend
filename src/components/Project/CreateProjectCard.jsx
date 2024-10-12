import React from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { DialogClose } from '../ui/dialog';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { tags } from '@/pages/ProjectList/ProjectList';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useDispatch } from 'react-redux';
import { store } from '@/Redux/Store';
import { createProject } from '@/Redux/projectApi/Action';

const CreateProjectCard = () => {
    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            category: "",
            tags: ["java", "react"]
        }
    });

    const onSubmit = (data) => {
        dispatch(createProject(data));
        console.log("Createing project...", data);
    }

    const handleTagsChange = (item) => {
        const currentTags = form.getValues("tags");
        const updatedTags = currentTags.includes(item) ? currentTags.filter(tag => tag !== item) : [...currentTags, item];

        form.setValue("tags", updatedTags)
    }

    return (
        <div>
            <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type="text" className="w-full py-5 px-5" placeholder="Enter project name ..." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="description"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type="text" className="w-full py-5 px-5" placeholder="Enter project description ..." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="category"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select
                                        defaultValue='Fullstack'
                                        value={field.value}
                                        onValueChange={(value) => field.onChange(value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="fullstack">Fullstack</SelectItem>
                                            <SelectItem value="frontend">Frontend</SelectItem>
                                            <SelectItem value="backend">Backend</SelectItem>
                                            <SelectItem value="ui-ux">UI/UX</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="tags"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => (
                                            handleTagsChange(value)
                                        )}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Tags" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                tags.map(tag => (
                                                    <SelectItem value={tag.value} key={tag}>{tag.name}</SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <div className='flex gap-1 flex-wrap'>
                                    {
                                        field.value.map(item => (
                                            <div key={item} onClick={() => handleTagsChange(item)} className='cursor-pointer rounded-sm flex items-center gap-2 py-1 px-4'>
                                                <span className='text-sm'>{item}</span>
                                                <Cross1Icon className='h-3 w-3' />
                                            </div>
                                        ))
                                    }
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogClose>
                        <Button type="submit" className="w-full px-10 my-5">Create</Button>
                    </DialogClose>
                </form>
            </Form>
        </div>
    )
}

export default CreateProjectCard