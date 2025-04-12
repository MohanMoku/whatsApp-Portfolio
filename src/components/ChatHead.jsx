import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";

export default function ChatHead(props) {
    return (
        <div className="w-full h-full bg-gray-500 flex justify-between items-center pl-10 pr-10">
            <div className="flex items-center space-x-3">
                <img src={props.image} alt="img" className="w-10 rounded-full" />
                <h1 className="text-white font-serif text-2xl font-bold">{props.name}</h1>
            </div>
            <div className="flex space-x-4 items-center">
                <IoCallOutline className="cursor-pointer font-bold text-white text-3xl" />
                <IoVideocamOutline className="cursor-pointer font-bold text-white text-4xl" />
            </div>
        </div>
    )
}
