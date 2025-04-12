import mokuPhoto from '../assets/mohan-kumar.png'

export default function LandingPage() {
    return (
        <div className='bg-gray-800 w-full h-full flex items-center justify-center'>
            <h1 className='text-7xl font-bold italic text-transparent' style={{ WebkitTextStroke: '1px white' }}>Mohan Kumar S</h1>
            <div className='flex justify-center h-150'>
                <img src={mokuPhoto} alt="img"/>
            </div>
        </div>
    )
}