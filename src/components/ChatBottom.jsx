import { HiMiniPaperClip } from "react-icons/hi2";
import { MdMicNone, MdOutlineEmojiEmotions } from "react-icons/md";

export default function ChatBottom(props) {

    return (
        <div className="w-full h-full flex justify-center items-center bg-gray-700 space-x-2">
            <MdOutlineEmojiEmotions className="text-3xl text-white" />
            <HiMiniPaperClip className="text-3xl text-white" />
            <input
                type="text"
                readOnly
                className="w-10/12 h-2/3 bg-white rounded-ss-xl rounded-ee-xl text-black pl-5"
                value={props.text ? props.text : "Type a message..."}
            />

            <MdMicNone className="text-3xl text-white" />
        </div>
    )
}


