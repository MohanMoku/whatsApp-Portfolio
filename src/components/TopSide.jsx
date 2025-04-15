import { PiChatsBold } from "react-icons/pi";
import { HiStatusOnline } from "react-icons/hi";
import { TiGroupOutline } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import logo from '../assets/logo1080.jpg'
import { Link } from "react-router-dom";

export default function TopSide() {
    return (
        <div className="flex flex-col justify-between items-center p-4 h-[100%]">
            <div className="flex gap-4 flex-col justify-center items-center">
                <div className="bg-black p-1">
                    <PiChatsBold size={30} />
                </div>
                <HiStatusOnline size={30} />
                <TiGroupOutline size={30} />
                <IoCallOutline size={30} />
            </div>
            <div className="flex gap-4 flex-col justify-center items-center">
                <CiSettings size={30} />
                <Link to={'/mohan-kumar-s'}>
                    <img src={logo} alt="img" className='w-7 rounded-full' />
                </Link>
            </div>
        </div>
    )
}