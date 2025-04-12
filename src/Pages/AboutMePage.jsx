import aboutDp from '../assets/about-me.jpeg'
import ChatBottom from '../components/ChatBottom'
import ChatHead from '../components/ChatHead'
import { useEffect, useState } from 'react'

const Message1 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">So Mohan… tell me more about yourself</div>
</div>;

const Message2 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        Alright, storytime.<br />
        I’m just a regular guy with a passion for solving problems through tech.<br />
        Started with curiosity, stayed for the thrill of making stuff that works.<br />
        <br />
        I’m studying Computer Science, diving deep into software development and AI.<br />
        Not just learning it for the degree, though—I’m in it because<br /> I love building things that people can actually use.
    </div>
</div>;

const Message3 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">What kind of dev are you?</div>
</div>;

const Message4 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        I’d call myself a full-stack dev with an AI twist.<br />
        React and Express are my bread and butter, MongoDB’s my vault,<br />and Python? My weapon of choice for anything data-driven.
    </div>
</div>;

const Message5 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">What keeps you going?</div>
</div>;

const Message6 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        Two things:
        <ul>
            <li>
                That rush when your code finally works.
            </li>
            <li>
                The idea that something I build today might help someone tomorrow.
            </li>
        </ul>
        Also... a lot of coffee.
    </div>
</div>;

const Message7 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Where do you see yourself headed?</div>
</div>;

const Message8 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        I’m aiming to build systems that scale,<br />AI that actually helps people,<br />and platforms where knowledge flows freely.<br />
        Think open-source energy meets startup hustle.<br />
        One line of code at a time.
    </div>
</div>;

const Message9 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Ok now tell me about your Education.</div>
</div>;

const Message10 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        Please go through Education chat<br />to know detailed information about my Education.<br />
        <br />
        Thank You
    </div>
</div>;

export default function AboutMePage() {

    const scrollToBottom = (node) => {
        if (node) {
            node.scrollTop = node.scrollHeight;
        }
    };

    const [messages, setMessages] = useState([
        { id: 1, time: 1000, text: 'So Mohan… tell me more about yourself', component: () => <Message1 /> },
        { id: 2, time: 3500, text: '', component: () => <Message2 /> },
        { id: 3, time: 22000, text: 'What kind of dev are you?', component: () => <Message3 /> },
        { id: 4, time: 25000, text: '', component: () => <Message4 /> },
        { id: 5, time: 35000, text: 'What keeps you going?', component: () => <Message5 /> },
        { id: 6, time: 38000, text: '', component: () => <Message6 /> },
        { id: 7, time: 47000, text: 'Where do you see yourself headed?', component: () => <Message7 /> },
        { id: 8, time: 50000, text: '', component: () => <Message8 /> },
        { id: 9, time: 62000, text: 'Ok now tell me about your Education.', component: () => <Message9 /> },
        { id: 10, time: 65000, text: '', component: () => <Message10 /> },
    ])

    const [chat, setChat] = useState([]);
    const [typingText, setTypingText] = useState('Type a message...');

    useEffect(() => {
        if (sessionStorage.getItem('about') === 'visited') {
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
            sessionStorage.setItem('about', 'visited');
            setTypingText('Type a message...');
        }, 65000);

    }, []);

    return (
        <div className="w-full h-full">
            <div className="w-full h-1/15">
                <ChatHead image={aboutDp} name="About Me" />
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
