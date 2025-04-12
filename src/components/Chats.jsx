import { HiDotsVertical } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo1080.jpg'
import aboutMe from '../assets/about-me.jpeg'
import education from '../assets/education.jpg'
import experience from '../assets/experience.jpg'
import projects from '../assets/projects.png'
import contact from '../assets/contact.webp'
import { Link, useLocation } from "react-router-dom";

export default function Chats() {

    const boxStyle = {
        backgroundColor: '#00000010',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
    };

    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const lastSegment = pathSegments.filter(Boolean).pop();
    console.log(lastSegment);

    return (
        <div className="">
            <div className="flex justify-between m-2 p-2">
                <h1 className='font-bold italic text-2xl'>Chats</h1>
                <HiDotsVertical size={30} className='cursor-pointer pt-1' />
            </div>
            <div className="relative m-2 p-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-10 rounded-full pl-4 pr-10 text-white border border-gray-400 focus:outline-none focus:border-blue-500"
                />
                <FaSearch
                    size={18}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                />
            </div>

            <nav className="flex flex-col gap-3 pl-5 pr-5 mt-8 items-center">

                <div className="flex w-full gap-4 items-center p-2 hover:bg-gray-800 hover:rounded-lg" style={lastSegment === 'mohan-kumar-s' ? boxStyle : null} >
                    <img src={logo} alt="img" className='w-12 rounded-full' />
                    <Link to='/mohan-kumar-s' className='font-bold italic text-2xl cursor-pointer'>Mohan Kumar S</Link>
                </div>

                <div className="flex w-full gap-4 items-center p-2 hover:bg-gray-800 hover:rounded-lg" style={lastSegment === 'about-me' ? boxStyle : null}>
                    <img src={aboutMe} alt="img" className='w-12 rounded-full' />
                    <Link to='/about-me' className='font-bold italic text-2xl cursor-pointer'>About Me</Link>
                </div>

                <div className="flex w-full gap-4 items-center p-2 hover:bg-gray-800 hover:rounded-lg" style={lastSegment === 'education' ? boxStyle : null}>
                    <img src={education} alt="img" className='w-12 rounded-full' />
                    <Link to='/education' className='font-bold italic text-2xl cursor-pointer'>Education</Link>
                </div>

                <div className="flex w-full gap-4 items-center p-2 hover:bg-gray-800 hover:rounded-lg" style={lastSegment === 'experience' ? boxStyle : null}>
                    <img src={experience} alt="img" className='w-12 rounded-full' />
                    <Link to='/experience' className='font-bold italic text-2xl cursor-pointer'>Experience</Link>
                </div>

                <div className="flex w-full gap-4 items-center p-2 hover:bg-gray-800 hover:rounded-lg" style={lastSegment === 'projects' ? boxStyle : null}>
                    <img src={projects} alt="img" className='w-12 rounded-full' />
                    <Link to='/projects' className='font-bold italic text-2xl cursor-pointer'>Projects</Link>
                </div>

                <div className="flex w-full gap-4 items-center p-2 hover:bg-gray-800 hover:rounded-lg" style={lastSegment === 'contact' ? boxStyle : null}>
                    <img src={contact} alt="img" className='w-12 rounded-full' />
                    <Link to='/contact' className='font-bold italic text-2xl cursor-pointer'>Contact</Link>
                </div>

            </nav>
        </div>
    )
}