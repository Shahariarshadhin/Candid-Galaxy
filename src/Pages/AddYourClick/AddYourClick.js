import React from 'react';
import { useForm } from "react-hook-form";

const AddYourClick = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>

            <div class="card w-96  shadow-xl mx-auto mt-10">
                <div class="card-body">

                    <h3 className='text-2xl text-white font-black mb-4'>Add Your Click</h3>
                    <form className='d-flex flex-column mb-72' onSubmit={handleSubmit(onSubmit)}>
                        <input className='input input-bordered input-accent w-full max-w-xs bg-[#000000] mb-4' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        <input className='input input-bordered input-accent w-full max-w-xs bg-[#000000] mb-4' placeholder='Type' {...register("type")} />
                        <input className='input input-bordered input-accent w-full max-w-xs bg-[#000000] mb-4' placeholder='Date' type="number" {...register("date")} />
                        <input className='input input-bordered input-accent w-full max-w-xs bg-[#000000] mb-4' placeholder='Photo URL' type="text" {...register("img")} />
                        <input className='text-white input input-bordered input-accent w-full max-w-xs bg-[#000000] mb-4' value="Upload Data" type="submit" />
                    </form>

                </div>
            </div>



        </div>
    );
};

export default AddYourClick;