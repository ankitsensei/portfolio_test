import {useState} from 'react';
import Logo from '../assets/ben10.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const [clicked, setClicked] = useState(false); ;
    return (
        <div className='fixed top-0 left-0 w-full p-2 z-50 bg-gradient-to-r from-[rgba(23,23,23,0.5)] to-[rgba(128,0,128,0.0)] lg:px-20'>
            <div className='flex items-center justify-between'>
            <div className='flex gap-3 items-center'>
                <img src={Logo} alt="Logo" className='rounded-full w-12'/>
                <h1 className='font-bold'>Ankit Bhagat</h1>
            </div>
            <div className='px-5'>
                <FontAwesomeIcon icon={faBars} onClick={() => setClicked(!clicked)} className='lg:text-2xl'/>
                {       
                    clicked ? 
                    <ul className='flex flex-col w-32 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-zinc-900 justify-center items-start px-3 absolute top-16 right-0 gap-2 font-semibold z-40 lg:h-64 lg:w-60 lg:text-2xl lg:gap-3 '>
                        <li className='hover:text-purple-500 duration-300'>Home</li>
                        <li className='hover:text-purple-500 duration-300'>Services</li>
                        <li className='hover:text-purple-500 duration-300'>Recent-Works</li>
                        <li className='hover:text-purple-500 duration-300'>Skills</li> 
                        <button className='w-20 h-6 flex items-center justify-center bg-gradient-to-r from-purple-600 to-zinc-900 rounded-full lg:w-40 lg:h-10'>Hire Me</button>
                    </ul>: null
                }
            </div>
        </div>  
        </div>
    )
}

export default Navbar