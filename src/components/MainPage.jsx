import { Route, Routes, useLocation } from 'react-router-dom'
import Chats from './Chats'
import LandingPage from '../Pages/LandingPage'
import MohanPage from '../Pages/MohanPage'
import AboutMePage from '../Pages/AboutMePage'
import EducationPage from '../Pages/EducationPage'
import ExperiencePage from '../Pages/ExperiencePage'
import ProjectsPage from '../Pages/ProjectsPage'
import ContactPage from '../Pages/ContactPage'

export default function MainPage() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <div className="flex h-[100%]">
            <div className={`lg:w-1/4 
            bg-gray-900
            border-1 
            border-gray-700            
            overflow-hidden
            ${isHome ? 'block' : 'hidden'}
            ${isHome ? 'w-full' : 'hidden'}
            lg:block overflow-y-auto rounded-3xl`}>
                <Chats />
            </div>

            <div className={`w-full lg:w-3/4 lg:block ${isHome ? 'hidden' : 'block'} rounded-3xl`}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="hidden lg:block h-full">
                                <LandingPage />
                            </div>
                        }
                    />
                    <Route path="/mohan-kumar-s" element={<MohanPage />} />
                    <Route path="/about-me" element={<AboutMePage />} />
                    <Route path="/education" element={<EducationPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<LandingPage />} />
                </Routes>
            </div>
        </div>
    )
}