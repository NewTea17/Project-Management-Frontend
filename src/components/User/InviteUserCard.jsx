import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useDispatch } from 'react-redux';
import { inviteToProject } from '@/Redux/projectApi/Action';
import { DialogClose } from '@radix-ui/react-dialog';
import { useParams } from 'react-router-dom';

const InviteUserCard = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const form = useForm({
        defaultValues: {
            email: "",
        }
    });

    const onSubmit = (data) => {
        dispatch(inviteToProject({ email: data.email, projectId: id }));
    }

    return (
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
                        <Button type="submit" className="w-full px-10 my-5">Invite</Button>
                    </DialogClose>
                </form>
            </Form>
        </div>
    )
}

export default InviteUserCard