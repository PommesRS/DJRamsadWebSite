import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
    const mailform = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_c86jje7', 'template_zyvtric', mailform.current, 'V76EhoGQU2lQ5PXKW')
            .then((result) => {
                console.log(result.text);
                alert('Email send!')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    window.onload = () => {

        const form = document.querySelector('form');
        const tx = document.querySelector('textarea');

        document.addEventListener('mousemove', (e) => {
            rotateElement(e, form);
        })
        
        function rotateElement(event, element){
            const x = event.clientX;
            const y = event.clientY;
            
            const middleX = element.getBoundingClientRect().x
            const middleY = element.getBoundingClientRect().y

            const offsetX = ((middleX - x + element.offsetWidth / 2) / element.offsetWidth / 2 ) * 30 ;
            const offsetY = ((middleY - y + element.offsetHeight / 2) / element.offsetHeight / 2) * 30;

            form.style.setProperty("--rotateX", offsetY + "deg")
            form.style.setProperty("--rotateY", 0 - offsetX + "deg")

        }
    }



  return (
      <form id='form' className={` mailform flex flex-col gap-5 w-[35rem] p-5 rounded-3xl relative`} ref={mailform} onSubmit={sendEmail}>
        <input placeholder='Name' type="text" name="from_name" required className='form-input' />
        <input placeholder='Deine Email' type="email" name="from_email" required className='form-input' />
        <textarea placeholder='Nachricht' name="message" required className='form-input h-36' />
        <input type="submit" value="Abseden" className='relative py-4 px-8 font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] bg-pink-gradient hover:cursor-pointer active:mt-[0.15rem] active:-mb-[0.15rem] active:box-shadow-2' />
      </form>
  );
};

export default EmailForm