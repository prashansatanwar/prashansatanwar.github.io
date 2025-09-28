import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import { social_links } from '../data/links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  const [submit, setSubmit] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_KEY,
        process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmit(true);
        e.target.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='h-[100%] pt-[20%] md:pt-[10%] lg:pt-[8%] w-full flex flex-col bg-[#F5F0E4] text-primary items-center'>
      <div className='w-3/5'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'> Send me a message! </h1>
        <p className='pt-2 pb-6'> Have something on your mind? A project idea, a curious thought, or just a hello? </p>
        
        {submit && <p>Message Sent. </p>}

        <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-4 text-primary'>
          <input type='text' name='name' placeholder='Full name' className='p-3 rounded outline outline-2 outline-transparent 
                                                                            border-2 border-transparent border-b-primary
                                                                            focus:outline-[3px] 
                                                                            focus:outline-primary 
                                                                            transition-all duration-300' required />
          <input type='email' name='email' placeholder='Email' className='p-3 rounded outline outline-2 outline-transparent 
                                                                            border-2 border-transparent border-b-primary
                                                                            focus:outline-[3px] 
                                                                            focus:outline-primary 
                                                                            transition-all duration-300' required />
          <textarea name='message' placeholder='Message' className='p-3 rounded outline outline-2 outline-transparent 
                                                                            bg-transparent
                                                                            border-2 border-transparent border-b-primary
                                                                            focus:outline-[3px] 
                                                                            focus:outline-primary 
                                                                            transition-all duration-300' required />
          <button type='submit' className='w-[10rem] ml-auto bg-primary text-primary2 p-2 rounded hover:bg-accent3 flex items-center justify-center gap-2'> 
            
            <div>
              Send Email 
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </button>
        </form>

      </div>
      <div className='mt-auto -mb-5 h-[8rem] p-8 bg-accent2 text-primary2 w-full flex items-center text-sm'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
        </svg>
        <span className='px-1'> 2025 Prashansa Tanwar</span>

        <span className='ml-auto flex'>
            {social_links.map((l, k) => (
                l.label !== 'Mail' && l.label !== 'Medium'  &&
                <a
                    href={l.path}
                    target="_blank"
                    rel="noreferrer"
                    key={k}
                    className='mx-2 '
                >
                <FontAwesomeIcon
                    icon={l.icon}
                    size="lg" 
                    className="p-2 rounded-full "
                    />
                </a>
            ))}
        </span>
      </div>
    </div>
  )
}

export default Contact