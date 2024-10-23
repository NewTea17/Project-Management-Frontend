import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { signIn } from '@/Redux/authenticationApi/Action';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        dispatch(signIn(data));
        navigate("/projects");
    }

    return (
        <div className='space-y-5'>
            <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                     <h1 className='text-center text-lg'>Sign In</h1>
                    <FormField
                        name="email"
                        control={form.control}
                        rules={{ required: "Email is required" }}
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
                        rules={{ required: "Password is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type="password" className="w-full py-5 px-5" placeholder="You password ..." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full px-10 my-5">Sign In</Button>
                </form>
            </Form>
        </div>
    )
}

export default SignIn