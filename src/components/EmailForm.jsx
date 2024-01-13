import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { waves } from '../assets'

export const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset()
    emailjs.sendForm('service_DJRamsadTes', 'template_zyvtric', form.current, 'V76EhoGQU2lQ5PXKW')///////////////put 't' at the end of service id to let it function properly
        .then((result) => {
            console.log(result.text);
            alert('Email send!')

        }, (error) => {
            console.log(error.text);
        });
    };

  return (
      <form className={`flex flex-col gap-5 w-[35rem] bg-[white] bg-[bottom right] bg-opacity-60 p-10 rounded-3xl relative z-[2] border-4 border-[#4F228D] rounded-3xl bg-black-gradient-2 box-shadow-2 relative`} ref={form} onSubmit={sendEmail}>
        <input placeholder='Name' type="text" name="from_name" required className='form-input' />
        <input placeholder='Your Email' type="email" name="from_email" required className='form-input' />
        <textarea placeholder='Message' name="message" required className='form-input h-36' />
        <input type="submit" value="Send" className='relative py-4 px-8 font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] bg-pink-gradient hover:cursor-pointer active:mt-[0.15rem] active:-mb-[0.15rem]' />
      </form>
  );
};

export default EmailForm