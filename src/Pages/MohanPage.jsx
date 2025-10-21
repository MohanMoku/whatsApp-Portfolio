import mokuDp from "../assets/logo1080.jpg"
import ChatHead from "../components/ChatHead"
import ChatBottom from "../components/ChatBottom";
import { FaFilePdf } from "react-icons/fa6";
import { MdDownloading } from "react-icons/md";
import { useEffect, useState } from "react";

const Message1 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Hii...</div>
</div>;

const Message2 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Yo! 👋 You made it. I’m Mohan Kumar S. What’s up?</div>
</div>;

const Message3 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Just checking your portfolio, what do you do?</div>
</div>;

const Message4 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">I’m a CS engineer. <br />I build stuff with code—mostly web apps and a bit of AI on the side.<br />You could say I’m half dev, half caffeine addict ☕</div>
</div>;

const Message5 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">That’s cool. What kind of tech do you use?</div>
</div>;

const Message6 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Mostly React, Express, MongoDB for web stuff.<br /> For AI and data science,<br />I vibe with Python, NumPy, Pandas,<br />and recently been tinkering with small language models.</div>
</div>;

const Message7 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble ">Built anything recently ?</div>
</div>;

const Message8 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Yeah! I’ve been working on this platform<br />called Students Hub — a kind of<br />peer-to-peer learning space powered by AI.<br />Also did a mini LLM project just for fun.</div>
</div>;

const Message9 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">How do I contact you?</div>
</div>;

const Message10 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Check Contact chat their you can find my contact details</div>
</div>;

const Message11 = () => <div className="chat chat-sender space-y-2">
    <div className="chat-bubble">Send your resume?</div>
</div>;

const Message12 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble">Boom 💥 here it is 👇</div>
</div>;

const Message13 = () => <div className="chat chat-receiver space-y-2">
    <div className="chat-bubble cursor-pointer" onClick={() => window.open('/Resume.pdf', '_blank')}>
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
                        <MdDownloading className="text-2xl text-white" />
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>;

export default function MohanPage() {

    const scrollToBottom = (node) => {
        if (node) {
            node.scrollTop = node.scrollHeight;
        }
    };

    const [messages, setMessages] = useState([
        { id: 1, time: 1000, text: "Hii...", component: () => <Message1 /> },
        { id: 2, time: 2000, text: "", component: () => <Message2 /> },
        { id: 3, time: 4000, text: "Just checking your portfolio, what do you do?", component: () => <Message3 /> },
        { id: 4, time: 7000, text: "", component: () => <Message4 /> },
        { id: 5, time: 13000, text: "That’s cool. What kind of tech do you use?", component: () => <Message5 /> },
        { id: 6, time: 15500, text: "", component: () => <Message6 /> },
        { id: 7, time: 24500, text: "Built anything recently ?", component: () => <Message7 /> },
        { id: 8, time: 27500, text: "", component: () => <Message8 /> },
        { id: 9, time: 37500, text: "How do I contact you?", component: () => <Message9 /> },
        { id: 10, time: 40500, text: "", component: () => <Message10 /> },
        { id: 11, time: 43500, text: "Send your resume?", component: () => <Message11 /> },
        { id: 12, time: 45500, text: "", component: () => <Message12 /> },
        { id: 13, time: 45600, text: "", component: () => <Message13 /> },
    ]);

    const [chat, setChat] = useState([]);
    const [typingText, setTypingText] = useState('Type a message...');

    useEffect(() => {
        if (sessionStorage.getItem('mohan') === 'visited') {
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
            sessionStorage.setItem('mohan', 'visited');
            setTypingText('Type a message...');
        }, 54500);

    }, []);

    return (
        <div className="w-full h-full rounded-3xl overflow-hidden">
            <div className="w-full h-1/15">
                <ChatHead image={mokuDp} name="Mohan Kumar S" />
            </div>

            <div className="overflow-y-scroll flex bg-gray-900 flex-col-reverse h-13/15 pb-2 pt-5" ref={scrollToBottom}>

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