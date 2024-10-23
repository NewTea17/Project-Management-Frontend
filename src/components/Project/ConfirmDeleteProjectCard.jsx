import { createProject, deleteProject } from '@/Redux/projectApi/Action';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { DialogClose } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const ConfirmDeleteProjectCard = ({ project }) => {
    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            content: ""
        }
    });

    console.log(project);

    const onSubmit = (data) => {
        if (project.name === data.content) {
            dispatch(deleteProject(project.id));
        }
    }

    return (
        <div>
            <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name="content"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type="text" className="w-full py-5 px-5" placeholder="Enter project name to confirm deleting ..." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <DialogClose>
                        <Button type="submit" className="w-full px-10 my-5">Delete</Button>
                    </DialogClose>
                </form>
            </Form>
        </div>
    )
}

export default ConfirmDeleteProjectCard