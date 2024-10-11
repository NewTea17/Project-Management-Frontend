import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { signUp } from '@/Redux/authenticationApi/Action';

const SignUp = () => {
    const dispatch = useDispatch()

    const form = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: ""
        }
    });

    const onSubmit = (data) => {
        dispatch(signUp(data));
    }

    return (
        <div className='space-y-5'>
            <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <h1 className='text-center text-lg'>Sign Up</h1>
                    <FormField
                        name="fullName"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type="text" className="w-full py-5 px-5" placeholder="You full name ..." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type="text" className="w-full py-5 px-5" placeholder="You email ..." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type="password" className="w-full py-5 px-5" placeholder="You password ..." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full px-10 my-5">Sign Up</Button>
                </form>
            </Form>
        </div>
    )
}

export default SignUp