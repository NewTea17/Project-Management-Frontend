import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const InviteUserCard = () => {
    const form = useForm({
        defaultValues: {
            email: "",
        }
    });

    const onSubmit = (data) => {
        console.log("Createing project...", data);
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

                    <Button type="submit" className="w-full px-10 my-5">Invite</Button>
                </form>
            </Form>
        </div>
    )
}

export default InviteUserCard