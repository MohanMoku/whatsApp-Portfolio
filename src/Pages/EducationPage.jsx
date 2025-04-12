import ChatBottom from '../components/ChatBottom'
import ChatHead from '../components/ChatHead'
import eduDp from '../assets/education.jpg'
import { useEffect, useState } from 'react';

const Message1 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">So, what’s your education journey like?</div>
</div>;

const Message2 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">
        Alright, let’s rewind a bit…<br /><br />

        <strong> 10th Grade:</strong><br />
        Did my schooling at <strong> Morarji Desai Residential School </strong><br />
        graduated in <strong>2020</strong>.<br />
        Back then, I was that curious kid who always asked,<br />“Why does this work like that?”<br /><br /><hr className='w-full' /><br />

        <strong> 12th Grade: </strong><br />
        Completed PU at <strong>Morarji Desai Science PU college</strong>,<br />
        finished in <strong>2022</strong><div className="br"></div>
        That’s when I started falling in love with logic, math,<br /> and yeah... coding snuck in.<br /><br /><hr className='w-full' /><br />

        <strong> Bachelor’s Degree (Now): </strong><br />
        Currently in my 3rd year of B.Tech <br /> in <b>Computer Science Engineering</b> at <strong> SDMIT</strong>,<br /> started in <b>2022</b><div className="br"></div>
        This is where the real grind began—and <br /> where I started building real-world projects, <br /> learning AI, and going full dev-mode. <br />
        <br /><hr className='w-full' />
    </div>
</div>;

const Message3 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Sounds like a solid path.</div>
</div>;

const Message4 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">For sure! Every step got me a little closer to <br /> figuring out what kind of builder I wanna be. <br />Wanna check out what I’ve built so far?</div>
</div>

const Message5 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Ok lets move to next chat</div>
</div>;

const Message6 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">for sure. next is about my work experience</div>
</div>

export default function EducationPage() {

    const scrollToBottom = (node) => {
        if (node) {
            node.scrollTop = node.scrollHeight;
        }
    };

    const [messages, setMessages] = useState([
        { id: 1, time: 1000, text: "So, what’s your education journey like?", component: () => <Message1 /> },
        { id: 2, time: 3000, text: "", component: () => <Message2 /> },
        { id: 3, time: 45000, text: "Sounds like a solid path.", component: () => <Message3 /> },
        { id: 4, time: 48000, text: "", component: () => <Message4 /> },
        { id: 5, time: 55000, text: "Ok lets move to next chat", component: () => <Message5 /> },
        { id: 6, time: 58000, text: "", component: () => <Message6 /> },
    ]);
    const [chat, setChat] = useState([]);
    const [typingText, setTypingText] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem('edu') === 'visited') {
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
            sessionStorage.setItem('edu', 'visited');
            setTypingText('Type a message...');
        }, 58000);

    }, []);

    return (
        <div className="w-full h-full">
            <div className="w-full h-1/15">
                <ChatHead image={eduDp} name="Education" />
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
