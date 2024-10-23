import { deleteFromProject } from '@/Redux/projectApi/Action';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { DialogClose } from '../ui/dialog';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';

const RemoveUserCard = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { project } = useSelector(store => store);

    const form = useForm({
        defaultValues: {
            email: "",
        }
    });

    const onSubmit = (data) => {
        const user = project.projectDetails?.team.find(user => user.email === data.email);

        if (user) {
            dispatch(deleteFromProject({ userId: user.id, projectId: id }));
        } else {
            alert('User not found in the project');
        }
    }

    return (
        <div>
            <div>
                <Form {...form}>
                    <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} type="text" className="w-full py-5 px-5" placeholder="Enter user email ..." />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogClose>
                            <Button type="submit" className="w-full px-10 my-5">Remove</Button>
                        </DialogClose>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default RemoveUserCard