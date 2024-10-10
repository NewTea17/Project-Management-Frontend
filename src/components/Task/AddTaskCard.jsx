import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const AddTaskCard = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      description: ""
    }
  });

  const onSubmit = (data) => {
    console.log("Createing task...", data);
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
                  <Input {...field} type="text" className="w-full py-5 px-5" placeholder="Enter task name ..." />
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
                  <Input {...field} type="text" className="w-full py-5 px-5" placeholder="Enter task description ..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full px-10 my-5">Add</Button>
        </form>
      </Form>
    </div>
  )
}

export default AddTaskCard