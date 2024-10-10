import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';

const CreateCommentCard = ({ taskId }) => {
    const form = useForm({
        defaultValues: {
            content: ""
        }
    });

    const onSubmit = (data) => {
        console.log("Createing comment...", data);
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