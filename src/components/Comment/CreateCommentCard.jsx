import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { useDispatch } from 'react-redux';
import { createComment } from '@/Redux/commentApi/Action';

const CreateCommentCard = ({ taskId }) => {
    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            content: ""
        }
    });

    const onSubmit = (data) => {
        dispatch(createComment({
            comment: data.content,
            taskId: taskId
        }));
    }

    return (
        <div>
            <Form {...form}>
                <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name="content"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex gap-2">
                                    <div>
                                        <Avatar>
                                            <AvatarFallback>T</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"
                                            className="w-[20rem]"
                                            placeholder="Your comment here ..."
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full px-10">Send</Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateCommentCard