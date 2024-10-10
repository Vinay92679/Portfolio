import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {

        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm()
      
        const onSubmit = async(data) => {
            console.log(data)
            const userdata = {
                name:data.name,
                message:data.message
            };
            try {
                await axios.post("https://getform.io/f/ajjezzna", userdata);
                toast.success("your message has been sent")
            } catch (error) {
                console.log(error)
                toast.error("something went wrong")
            }
        }
    return(
        <>
            <div className="contact-section py-3 pb-5" name="contact">
                <div className="container py-5">
                    <div className="row mt-3">
                        <div className="text-center mb-5 pb-3">
                            <h1 className="text-white display-5">Contact <span className="theme-yellow fw-bold">Me</span></h1>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="mb-5">
                                <p className="mb-4 text-white"><span className="theme-yellow fw-bold">Address _ </span>sector 45, noida, uttar pradesh, 201301</p>
                                <p className="mb-4 text-white"><span className="theme-yellow fw-bold">Phone _ </span>+91 9267922580</p>
                                <p className="mb-4 text-white"><span className="theme-yellow fw-bold">E mail _ </span>vsfriendz011@gmail.com</p>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <form 
                            // action="https://getform.io/f/ajjezzna"
                            // method="POST"
                            onSubmit={handleSubmit(onSubmit)}
                            >
                                <input 
                                {...register("name", { required: true })}
                                type="text" 
                                name="name" 
                                defaultValue={"Name"} 
                                className="mb-2 p-2"
                                />
                                <br/>
                                {errors.name && <span className="text-white">This field is required</span>}

                                <textarea 
                                {...register("message", { required: true })}
                                name="message" 
                                defaultValue={"Massage"} 
                                className="mt-5 p-2" 
                                rows={4} cols={50} 
                                />
                                {errors.message && <span className="text-white">This field is required</span>}
                                <br/>
                                <button type="submit" className="yellow-button mt-4">Contact</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;