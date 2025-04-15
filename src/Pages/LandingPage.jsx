import mokuPhoto from '../assets/moku-bg.png'

export default function LandingPage() {
    return (
        <div className='bg-gray-900 w-full h-full flex items-center justify-center rounded-3xl p-10'>
            <h1 className='text-7xl font-bold italic text-transparent' style={{ WebkitTextStroke: '1px white' }}>Mohan Kumar</h1>
            <div className='flex justify-center h-150'>
                <img src={mokuPhoto} alt="img"/>
            </div>
        </div>
    )
}