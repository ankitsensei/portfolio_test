import Logo from '../assets/ben10.jpg'
const Navbar = () => {
    return (
        <div className='px-20 py-5 flex items-center justify-between'>
            <div className='flex gap-3 items-center'>
                <img src={Logo} alt="Logo" className='rounded-full w-12'/>
                <h1 className='font-bold'>Ankit Bhagat</h1>
            </div>
            <div className=''>
                <ul className='flex items-center gap-10 font-semibold '>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Recent Works</li>
                    <li>Skills</li>
                    <button className='bg-gradient-to-r from-purple-600 to-zinc-900 px-6 py-2 rounded-full'>Hire Me</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar