import ChatBottom from '../components/ChatBottom'
import ChatHead from '../components/ChatHead'
import contactDp from '../assets/contact.webp'
import { useEffect, useState } from 'react';
import { FaEnvelope, FaFilePdf, FaPhone } from "react-icons/fa6";
import { MdAttachEmail, MdDownloading } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiGlobe } from 'react-icons/gi';

const Message1 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">I’ve seen your work—it’s 🔥. How can I reach out?</div>
</div>;

const Message2 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Appreciate that! You’ve got options:</div>
</div>

const Message3 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        <div className="flex space-x-4 items-center mb-5 justify-center">
            <FaPhone className='w-5 text-red-500' /> <h1>Phone</h1>
        </div>
        Wanna talk directly? Hit me up at <br />
        <div className="flex space-x-2 items-center justify-center">
            <FaMobileAlt className='text-blue-500' /> <Link to={'tel:+917795853896'} className='text-blue-400'>+91 7795853896</Link>
        </div>
    </div>
</div>;

const Message4 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        <div className="flex space-x-4 items-center mb-5 justify-center">
            <MdAttachEmail className='w-5 text-white' /> <h1>Email</h1>
        </div>
        For anything professional or long-form: <br />
        <div className="flex space-x-2 items-center justify-center">
            <FaEnvelope className='text-white' /> <Link to={'mailto:mohanmoku2004@gmail.com'} className='text-blue-400'>mohanmoku2004@gmail.com</Link>
        </div>
    </div>
</div>;

const Message5 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        <div className="flex flex-col items-center justify-center">

            <div className="flex space-x-4 items-center mb-5 justify-center">
                <FaLocationDot className='w-5 text-red-500' /> <h1>Location</h1>
            </div>
            I'm currently based in: <br />
            <div className="flex space-x-2 items-center justify-center">
                <BsGlobe2 className='text-white' /> <Link to={'https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9542802,77.4661328,11z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'} className='text-blue-400'>Bengaluru, Karnataka</Link> <br />
            </div>
            Always down to chat over coffee or collab online .
        </div>
    </div>
</div>;

const Message6 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Got any socials?</div>
</div>;

const Message7 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        <div className="flex space-x-3 items-center justify-center mb-2">
            <GiGlobe className='w-10 text-blue-500 text-5xl' /> <h1 className='text-3xl font-bold text-red-600'>Socials</h1>
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center mt-5">
            <div className="flex items-center space-x-4">
                <FaGithub className='text-white text-2xl' /> <Link to={'https://github.com/MohanMoku'} className='text-blue-400'>Github</Link>
            </div>
            <div className="flex items-center space-x-4">
                <FaLinkedin className='text-white text-2xl' /> <Link to={'https://linkedin.com/in/mohan-kumar-s-a23bab259'} className='text-blue-400'>Linkedin</Link>
            </div>
            <div className="flex items-center space-x-4">
                <FaInstagram className='text-white text-2xl' /> <Link to={'https://www.instagram.com/_s_mo_ku_4_/'} className='text-blue-400'>Instagram</Link>
            </div>
            <div className="flex items-center space-x-4">
                <RiTwitterXFill className='text-white text-2xl' /> <Link to={'https://x.com/MohanKu78075447'} className='text-blue-400'>X</Link>
            </div>
            <div className="flex items-center space-x-4">
                <FaFacebookSquare className='text-white text-2xl' /> <Link to={'https://www.facebook.com/share/15xhvw5THh/'} className='text-blue-400'>Facebook</Link>
            </div>
            <div className="flex items-center space-x-4">
                <FaRedditAlien className='text-white text-2xl' /> <Link to={'https://www.reddit.com/u/smoku4/s/u8QJSXnUdo'} className='text-blue-400'>Reddit</Link>
            </div>
        </div>
    </div>
</div>;

const Message8 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Cool, I'll hit you up soon. Any last words?</div>
</div>;

const Message9 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        Just this:
        “Whether it’s a collaboration, question, idea,<br />
        or just a vibe—don’t hesitate to say hey. <br />Every connection starts with a message.” <br /><br />

        Let’s build something legendary. 🚀
    </div>
</div>;

const Message10 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">And here is my Resume</div>
</div>;

const Message11 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        <div className="flex flex-col gap-4">
            Mohan Kumar Resume 📁
            <div className="bg-base-100 rounded-md">
                <button className="flex items-center gap-2 px-3 py-2 max-sm:w-11/12">
                    <div className="flex flex-col gap-2 max-sm:w-5/6">
                        <div className="flex items-center">
                            <FaFilePdf className="text-2xl mr-2 text-red-600" />
                            <span className="text-base-content/80 truncate font-medium">Mohan Resume.pdf</span>
                        </div>
                        <div className="text-base-content flex items-center gap-1 text-xs max-sm:hidden">
                            2 Pages
                            <span className="icon-[tabler--circle-filled] mt-0.5 size-1.5"></span>
                            1.8 MB
                            <span className="icon-[tabler--circle-filled] mt-0.5 size-1.5"></span>
                            PDF
                        </div>
                    </div>
                    <span className="btn btn-text btn-circle">
                        <MdDownloading className="text-2xl text-white" onClick={() => window.open('/Resume.pdf', '_blank')} />
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>;

export default function ContactPage() {

    const scrollToBottom = (node) => {
        if (node) {
            node.scrollTop = node.scrollHeight;
        }
    };

    const [messages, setMessages] = useState([
        { id: 1, time: 1000, text: 'I’ve seen your work—it’s', component: () => <Message1 /> },
        { id: 2, time: 2000, text: '', component: () => <Message2 /> },
        { id: 3, time: 3000, text: '', component: () => <Message3 /> },
        { id: 4, time: 4000, text: '', component: () => <Message4 /> },
        { id: 5, time: 5000, text: '', component: () => <Message5 /> },
        { id: 6, time: 6000, text: 'Got any socials?', component: () => <Message6 /> },
        { id: 7, time: 7000, text: '', component: () => <Message7 /> },
        { id: 8, time: 8000, text: "Cool, I'll hit you up soon", component: () => <Message8 /> },
        { id: 9, time: 9000, text: 'Type a message...', component: () => <Message9 /> },
        { id: 10, time: 10000, text: '', component: () => <Message10 /> },
        { id: 11, time: 11000, text: '', component: () => <Message11 /> },
    ]);
    const [chat, setChat] = useState([]);
    const [typingText, setTypingText] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem('contact') === 'visited') {
            setChat([...messages])
            return;
        }

        messages.forEach((msg) => {
            setTimeout(() => {
                setChat((prev) => [...prev, msg]);
                setMessages((prev) => prev.filter((m) => m.id !== msg.id));
                setTypingText(messages.find(m1 => m1.id === msg.id + 1)?.text || "Type a message...");
            }, msg.time);
        });

        setTimeout(() => {
            sessionStorage.setItem('contact', 'visited');
            setTypingText('Type a message...');
        }, 11000);

    }, []);

    return (
        <div className="w-full h-full">
            <div className="w-full h-1/15">
                <ChatHead image={contactDp} name="Contact" />
            </div>
            <div className="overflow-y-scroll flex flex-col-reverse h-13/15 pb-2 pt-5" ref={scrollToBottom}>

                {chat.slice().reverse().map((Component, idx) => (
                    <Component.component key={idx} />
                ))}

            </div>

            <div className="w-full h-1/15">
                <ChatBottom text={typingText} />
            </div>

        </div>
    )
}
