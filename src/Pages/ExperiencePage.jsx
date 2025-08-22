import ChatBottom from '../components/ChatBottom'
import ChatHead from '../components/ChatHead'
import expDp from '../assets/experience.jpg'
import { useEffect, useState } from 'react';

const Message1 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Been in any hackathons?</div>
</div>;

const Message2 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        Oh yeah—hackathons are my jam. <br /> Nothing like 24 hours of chaos, caffeine, and creativity. <br /><br />
        Here are a few where I went full dev-mode: <br />
        <br />
        1. <b><u> INNOVATE-A-THON </u></b><br />
        Project: <b>Farm Direct</b><br />
        Description:
        We built a web and moblie application <br /> that connects farmers directly with consumers, <br /> ensuring fresh produce and fair prices by cutting out middlemen. <br /> It supports local agriculture and promotes sustainability. <br />
        I handled Android Mobile App Development. <br />
        Place: SDMIT <br />
        Date: 27-09-2024 <br />
        That one really taught me how to build fast and smart.
        <br /><br />
    </div>
</div>;

const Message3 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">

        2. <b><u>FUSION-TECHATHON</u></b><br />
        Project: Freelancing Platform <br />
        Description:
        Created an online marketplace where individuals <br /> offer services and businesses hire talent for short-term or <br />project-based work. <br />It connects freelancers with clients across various fields <br /> like writing, design, tech, and marketing. <br />
        Worked on MERN STACK <br />
        Place: ALVAS Engineering College <br />
        Date: 09-11-2024 <br />

        We didn’t sleep—but we did ship.
    </div>
</div>;

const Message4 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Yo that’s impressive.</div>
</div>;

const Message5 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        Thanks! Each one pushed me to think faster,<br /> build cleaner, and work better with a team. <br /><br />
        Oh, and outside hackathons—<br />
        I also conducted a <b><u>Workshop</u></b> for SDM Polytechnic students on <b>React.js</b>. <br />
        It was all about helping them kickstart frontend development, <br />
        introducing concepts like components, hooks, and state management. <br />
        Honestly, teaching made me a better learner too. 🚀
    </div>
</div>;

const Message6 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Thanks! Each one pushed me to think faster,<br /> build cleaner, and work better with a team. <br />
        Can’t wait for the next one. <br /><br /> Let's move to next one which is my Projects</div>
</div>

export default function ExperiencePage() {

    const scrollToBottom = (node) => {
        if (node) {
            node.scrollTop = node.scrollHeight;
        }
    };

    const [messages, setMessages] = useState([
        { id: 1, time: 1000, text: 'Been in any hackathons?', component: () => <Message1 /> },
        { id: 2, time: 3000, text: '', component: () => <Message2 /> },
        { id: 3, time: 30000, text: '', component: () => <Message3 /> },
        { id: 3, time: 60000, text: 'Yo that’s impressive.', component: () => <Message4 /> },
        { id: 4, time: 63000, text: '', component: () => <Message5 /> },
        { id: 5, time: 67000, text: '', component: () => <Message6 /> },
    ])

    const [chat, setChat] = useState([])
    const [typingText, setTypingText] = useState('')

    useEffect(() => {
        if (sessionStorage.getItem('exp') === 'visited') {
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
            sessionStorage.setItem('exp', 'visited');
            setTypingText('Type a message...');
        }, 63000);

    }, []);

    return (
        <div className="w-full h-full rounded-3xl overflow-hidden">
            <div className="w-full h-1/15">
                <ChatHead image={expDp} name="Experience" />
            </div>

            <div className="overflow-y-scroll bg-gray-900 flex flex-col-reverse h-13/15 pb-2 pt-5" ref={scrollToBottom}>

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
