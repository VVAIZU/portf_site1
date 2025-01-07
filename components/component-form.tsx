"use client"

import * as Craft from "@/components/craft";

// import * as z from "zod";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
    emailAddress: z.string().email(),
    name: z.string().min(3),
    phone: z.string().regex(phoneRegex, 'Invalid Number!'),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function ComponentForm() {
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailAddress: "",
            name: "",
            phone: ""
        },
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({values});
        toast.success('Form has been sended');
    }


    return (
        <Craft.Section id="form"  className="bg-[#E6DFCF]">
            <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
                <div className="not-prose relative flex h-96 overflow-hidden">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="max-w-md w-full flex flex-col gap-4"
                        >
                            <FormField
                                control={form.control}
                                name="emailAddress"
                                render={({ field }) => {
                                    return (<FormItem>
                                        <FormLabel>Email address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email address"
                                                type="email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => {
                                    return (<FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Name"
                                                type="name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => {
                                    return (<FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Phone"
                                                type="phone"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    );
                                }}
                            />
                            <Button type="submit" className="w-full">Submit</Button>
                        </form>
                    </Form>
                </div>
                <div className="flex flex-col gap-6 py-8">
                    <h3 className="!my-0">Contact me!</h3>
                    <p className="font-light leading-[1.4] opacity-70">
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <div className="not-prose flex items-center gap-2">
                        <Button className="w-fit" variant="link" asChild>
                            <Link href="#">Make request<ArrowRight className="ml-2 w-3" /></Link>
                        </Button>
                    </div>
                </div>
            </Craft.Container>
        </Craft.Section>
    )
}

// export default ComponentForm;