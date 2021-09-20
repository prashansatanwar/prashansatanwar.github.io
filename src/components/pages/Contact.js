import React from "react";
import Sidebar from "../Sidebar";
// import ReactMarkdown from "react-markdown";
// import raw from "raw.macro";
// import { Link } from "react-router-dom";

// const data = raw("../../data/contact.md");

// const LinkRenderer = ({ ...children }) => <Link {...children} />;

function Contact() {
	return (
		<div className="flex flex-grow z-10 justify-center font-raleway tracking-wide my-20 h-full w-full">
			<div
				className="flex flex-col lg:flex-row 
                                px-5 md:px-32 w-full 
                                justify-center"
			>
				<Sidebar />
				<div
					className="flex flex-col
                            lg:ml-10 p-5 lg:p-10 lg:w-3/4 
                            order-first lg:order-last 
                            bg-cardcolor "
				>
					<h1 className="tracking-widest uppercase font-extrabold text-lg sm:text-3xl text-center py-4 border-b-2">
						Contact
					</h1>
					<br />

                    <div className='text-sm sm:text-base'>
                        <h3 className='font-semibold text-base sm:text-lg'>Stay in touch!</h3>
                        <br/>
                        Say hi on <a href='https://twitter.com/prashansatanwar' target='_blank' rel='noreferrer' className='text-hovercolor hover:text-textcolor font-medium'>twitter</a>
                        <br/>
                        Or you can also mail me at <a href='mailto:prashansatanwar@gmail.com' className='font-medium text-hovercolor hover:text-textcolor'>prashansatanwar@gmail.com</a>

                        <div className='py-5 flex flex-col'>

                            <p className='font-medium '>Or you can find me on:</p>
                                <a href='https://www.linkedin.com/in/prashansa-tanwar/' target='_blank' rel='noreferrer' className='text-hovercolor hover:text-textcolor'>Linkedin</a>
                                <p className='text-sm'><a href='https://www.instagram.com/ps_palette/' target='_blank' rel='noreferrer' className='text-hovercolor hover:text-textcolor text-base'>Instagram</a> (Check it out... I like art :p)</p> 
                        </div>

                    </div>
				</div>
			</div>
		</div>
	);
}

export default Contact;