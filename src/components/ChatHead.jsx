import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ChatHead(props) {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="w-full h-full bg-gray-700 flex justify-between items-center pl-10 pr-10">
            <div className="flex items-center space-x-3">
                <IoMdArrowRoundBack className="cursor-pointer font-bold text-white text-2xl lg:hidden" onClick={goBack} />
                <img src={props.image} alt="img" className="lg:w-10 w-5 rounded-full" />
                <h1 className="text-white font-serif lg:text-2xl text-1xl font-bold">{props.name}</h1>
            </div>
            <div className="flex space-x-4 items-center">
                <IoCallOutline className="cursor-pointer font-bold text-white text-1xl lg:text-3xl" />
                <IoVideocamOutline className="cursor-pointer font-bold text-white text-1xl lg:text-4xl" />
            </div>
        </div>
    )
}