import ChatBottom from '../components/ChatBottom'
import ChatHead from '../components/ChatHead'
import projDp from '../assets/projects.png'
import { Link } from 'react-router-dom';
import { FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiScikitlearn } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiNumpy } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { useEffect, useState } from 'react';

const Message1 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Got anything cool you've built lately?</div>
</div>

const Message2 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Oh, totally. Check this one out first:</div>
</div>;

const Message3 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        <b> Blog APP </b><br />
        Built a full-stack blog platform using <br /> the MERN stack—Node.js, MongoDB, Express.js, and React.js. <br />
        Deployed it from scratch, including auth, CRUD functionality, and a sleek UI. <br />
        <Link to={'https://github.com/MohanMoku/Blog-Application'} target='_blank' className='text-blue-500'>Blog App Github Repo</Link><br />
        <div className="flex space-x-2">
            <RiReactjsLine className='text-3xl inline-block text-blue-500' />
            <FaNode className='text-3xl inline-block text-green-500' />
            <SiExpress className='text-3xl inline-block text-blue-500 font-bold' />
            <DiMongodb className='text-3xl inline-block text-green-500' />
        </div>
    </div>
</div>;

const Message4 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Nice! Blogging platforms are tricky—handling posts, users, all that jazz. <br />
        What else you got?</div>
</div>;

const Message5 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Glad you asked. Here’s one that dives into machine learning:</div>
</div>;

const Message6 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        <b> Dynamic Text Generation </b><br />
        I fine-tuned a GPT-2 model to generate tech-related content. <br />
        It was my first big step into NLP—and <br /> it felt like teaching a robot how to speak tech! <br />
        <Link to={'https://github.com/MohanMoku/Dynamic-Text-Generate-on-Tech'} target='_blank' className='text-blue-500'>Dynamic Text Generator Github Repo
        </Link><br />
        <div className="flex space-x-2">
            <FaPython className='text-3xl inline-block text-white' />
            <SiScikitlearn className='text-3xl inline-block text-white' />
        </div>
    </div>
</div>;

const Message7 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Damn, from front-end UI to fine-tuning GPT-2? <br /> You're kinda everywhere 👀 <br />
        Ever done anything with classification or real-world ML?</div>
</div>;

const Message8 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Absolutely. Here’s something shorter but impactful:</div>
</div>;

const Message9 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        <b>SMS Spam Detection</b> <br />
        A simple ML classifier that detects if a message is spam or not. <br />
        Used Python, Pandas, scikit-learn, <br /> and a whole lotta ham vs spam data. <br />
        <Link to={'https://github.com/MohanMoku/SMS-Spam-Detection'} target='_blank' className='text-blue-500'>SMS Spam Detection Github Repo
        </Link><br />
        <div className="flex space-x-2">
            <FaPython className='text-3xl inline-block text-white' />
            <SiNumpy className='text-3xl inline-block text-white' />
            <SiScikitlearn className='text-3xl inline-block text-white' />
        </div>
    </div>
</div>;

const Message10 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">That’s actually super useful. Quick and smart. <br /> Any Android stuff?</div>
</div>;

const Message11 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Yup, built this one for mobile dev lovers:</div>
</div>;

const Message12 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        <b>Android App</b> <br />
        An Android app built using Java that helps split bills between friends. <br />
        Think clean UI, quick inputs, and no awkward “You owe me ₹20” convos. <br />

        <Link to={'https://github.com/MohanMoku/Splitify'} target='_blank'className='text-blue-500'> Splitify Github Repo
        </Link><br />

        <div className="flex space-x-2">
            <FaJava className='text-3xl inline-block text-white' />
            <SiAndroidstudio className='text-3xl inline-block text-white' />
        </div>

    </div>
</div>;

const Message13 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Damn, that’s a solid lineup. You’ve done all this?</div>
</div>;

const Message14 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        That’s a glimpse into the projects that shaped my journey so far. <br />
        If you’re interested in collaborating, have feedback, or want to connect— <br />

        👉 I’d love to hear from you. <br />
        [Let’s connect → Contact Page]
    </div>
</div>;


export default function ProjectsPage() {

    const scrollToBottom = (node) => {
        if (node) {
            node.scrollTop = node.scrollHeight;
        }
    };

    const [messages, setMessages] = useState([
        { id: 1, time: 1000, text: "Got anything cool you've built lately? ", component: () => <Message1 /> },
        { id: 2, time: 2000, text: '', component: () => <Message2 /> },
        { id: 3, time: 4000, text: '', component: () => <Message3 /> },
        { id: 4, time: 14000, text: 'Nice! Blogging platform', component: () => <Message4 /> },
        { id: 5, time: 16000, text: '', component: () => <Message5 /> },
        { id: 6, time: 18000, text: '', component: () => <Message6 /> },
        { id: 7, time: 28000, text: 'Damn, from front-end UI to fine-tuning GPT-2?', component: () => <Message7 /> },
        { id: 8, time: 34000, text: '', component: () => <Message8 /> },
        { id: 9, time: 38000, text: '', component: () => <Message9 /> },
        { id: 10, time: 50000, text: 'That’s actually super useful', component: () => <Message10 /> },
        { id: 11, time: 54000, text: '', component: () => <Message11 /> },
        { id: 12, time: 64000, text: '', component: () => <Message12 /> },
        { id: 13, time: 66000, text: 'Damn, that’s a solid lineup.', component: () => <Message13 /> },
        { id: 14, time: 68000, text: '', component: () => <Message14 /> },
    ])

    const [chat, setChat] = useState([])
    const [typingText, setTypingText] = useState('')

    useEffect(() => {
        if (sessionStorage.getItem('projects') === 'visited') {
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
            sessionStorage.setItem('projects', 'visited');
            setTypingText('Type a message...');
        }, 68000);

    }, []);

    return (
        <div className="w-full h-full">
            <div className="w-full h-1/15">
                <ChatHead image={projDp} name="Projects" />
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
