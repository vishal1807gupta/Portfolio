import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const ContactUsForm = ({ dark }) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const submitContactForm = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post('https://portfolio-backend-unmo.onrender.com/send-email', data);
            response?.data?.success ? toast.success("Message sent ") : toast.error("Message failed ")
        } catch (e) {
            // console.log("Not send the message");
            toast.error("Message failed")
        }
        setLoading(false);
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                name: "",
                message: "",
            })
        }
    }, [isSubmitSuccessful, reset])
    return (
        <form onSubmit={handleSubmit(submitContactForm)}
            className={`w-full flex flex-col gap-4 px-2 md:px-4 rounded-xl  py-6 text-[1rem] ${dark ? 'dark' : 'light'}`}>

            <div className='text-[2rem]  text-center'>Let's Talk</div>

            <div div className='relative w-full '>
                <label htmlFor='name' >Name<sup className='text-pink-100'>*</sup> </label>
                <input
                    type="text"
                    name="name"
                    placeholder='Name'
                    id='name'
                    {...register("name", { required: true })}
                    className={`w-full rounded-[0.5rem]  px-2 py-0 ${dark ? ' placeholder:text-slate-200 text-slate-200 bg-stone-800' : 'placeholder:text-slate-800 text-slate-800 '}`}
                />
                {
                    errors.name && (
                        <div className='text-xs w-full absolute bottom-0  translate-y-[120%] text-red-500 left-2'> Please enter your Name</div>
                    )
                }
            </div>


            <div div className='relative w-full '>
                <label htmlFor='email' >Email<sup className='text-pink-100'>*</sup> </label>
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    id='email'
                    {...register("email", { required: true })}
                    className={`w-full rounded-[0.5rem]  px-2 py-0 ${dark ? ' placeholder:text-slate-200 text-slate-200 bg-stone-800' : 'placeholder:text-slate-800 text-slate-800 '}`}
                />
                {
                    errors.email && (
                        <div className='text-xs w-full absolute bottom-0  translate-y-[120%] text-red-500 left-2'> Please enter your Email Address</div>
                    )
                }
            </div>

            <div div className='relative w-full '>
                <label htmlFor='message' >Message<sup className='text-pink-100'>*</sup> </label>
                <textarea
                    rows={2}
                    type="text"
                    name="message"
                    placeholder='Write your message here....'
                    id='message'
                    {...register("message", { required: true })}
                    className={`w-full rounded-[0.5rem]  px-2 py-0 ${dark ? ' placeholder:text-slate-200 text-slate-200 bg-stone-800' : 'placeholder:text-slate-800 text-slate-800 '}`}
                />
                {
                    errors.message && (
                        <div className='text-xs w-full absolute bottom-0  translate-y-[120%] text-red-500 left-2'> Please enter your Message</div>
                    )
                }
            </div>

            <button type="submit"
                className={`w-full  ${dark ? 'bg-stone-100 text-slate-800 ' : 'bg-stone-800 text-slate-100 '} my-2  transition-all duration-200  rounded-full hover:scale-95 `}
            >
                <div className=' py-2  text-lg text-center  tracking-wide'>
                    {
                        loading ? (
                            <div className='relative'>
                                <div className='h-1/2 aspect-square rounded-full absolute right-[30%] top-2 bg-red-500 animate-ping' />
                                <div> Sending...</div>
                            </div>
                        ) : "Send Message"
                    }
                </div>
            </button>
        </form >
    )
}

export default ContactUsForm
