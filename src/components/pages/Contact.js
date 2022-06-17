import React from "react";
import Sidebar from "../Sidebar";
// import ReactMarkdown from "react-markdown";
// import raw from "raw.macro";
// import { Link } from "react-router-dom";

// const data = raw("../../data/contact.md");

// const LinkRenderer = ({ ...children }) => <Link {...children} />;

function Contact() {
	return (
		<div className="flex flex-grow 
					z-10 py-20 min-h-screen min-w-screen
					justify-center 
					font-raleway tracking-wide text-textcolor dark:text-darktextcolor
					">
			<div
				className="flex flex-col lg:flex-row 
                            z-10 px-5 md:px-32 w-full 
                            justify-center"
			>
				<Sidebar />
				<div
					className="flex flex-col
                            lg:ml-10 p-5 lg:p-10 lg:w-3/4 
                            order-first lg:order-last 
                            bg-cardcolor dark:bg-darkcardcolor"
				>
					<h1 className="tracking-widest uppercase font-extrabold text-4xl text-center py-4 border-b-2">
						Contact
					</h1>
					<br />

                    <div className='text-sm sm:text-base'>
                        <h3 className='font-semibold text-base sm:text-lg'>Stay in touch!</h3>
                        <br/>
                        Say hi on <a 
								href='https://twitter.com/prashansatanwar' 
								target='_blank' rel='noreferrer' 
								className='text-hovercolor dark:text-darkhovercolor hover:text-textcolor dark:hover:text-darktextcolor font-medium'
								>twitter </a>
						or mail me at &#160;
						<a href='mailto:prashansatanwar@gmail.com' 
							className='font-medium text-hovercolor dark:text-darkhovercolor hover:text-textcolor dark:hover:text-darktextcolor'
							>prashansatanwar@gmail.com</a>

                        <div className='py-5 flex flex-col text-base'>

                            <p className='font-medium '>You can also find me on:</p>
                                <a href='https://www.linkedin.com/in/prashansa-tanwar/' target='_blank' rel='noreferrer' className='text-hovercolor dark:text-darkhovercolor hover:text-textcolor dark:hover:text-darktextcolor'>Linkedin</a>
                                <p className='text-sm'><a href='https://www.instagram.com/ps_palette/' target='_blank' rel='noreferrer' className='text-hovercolor dark:text-darkhovercolor hover:text-textcolor dark:hover:text-darktextcolor text-base'>Instagram</a> (Check it out... I like art :p)</p> 
                        </div>

                    </div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
