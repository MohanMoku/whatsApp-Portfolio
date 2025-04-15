import logo from '../assets/logo1080.jpg'
import { FaWindowMinimize } from "react-icons/fa"
import { FaWindowMaximize } from "react-icons/fa"
import { FaWindowClose } from "react-icons/fa";

export default function TopHeader() {
    return (
        <div className="flex justify-between p-1">
            <div className="flex m-1 items-center gap-2">
                <img src={logo} alt="img" className='w-7 rounded-full' />
                <p className='font-bold italic'>Mohan Kumar S</p>
            </div>
            <div className="m-2 flex gap-3">
                <FaWindowMinimize />
                <FaWindowMaximize />
                <FaWindowClose onClick={() => window.close()} />
            </div>
        </div>
    )
}