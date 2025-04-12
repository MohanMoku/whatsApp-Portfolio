import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chats from './Chats'
import LandingPage from '../Pages/LandingPage'
import MohanPage from '../Pages/MohanPage'
import AboutMePage from '../Pages/AboutMePage'
import EducationPage from '../Pages/EducationPage'
import ExperiencePage from '../Pages/ExperiencePage'
import ProjectsPage from '../Pages/ProjectsPage'
import ContactPage from '../Pages/ContactPage'

export default function MainPage() {
    return (
        <div className="flex h-[100%]">
            <BrowserRouter>
                <div className="w-1/4 bg-black-50 border-1 border-amber-50 overflow-hidden">
                    <Chats />
                </div>

                <div className="w-3/4 bg-black-500 border-1 border-amber-50">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/mohan-kumar-s" element={<MohanPage />} />
                        <Route path="/about-me" element={<AboutMePage />} />
                        <Route path="/education" element={<EducationPage />} />
                        <Route path="/experience" element={<ExperiencePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<LandingPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}