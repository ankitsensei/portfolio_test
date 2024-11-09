import {useState} from 'react';
import Logo from '../assets/ben10.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const [clicked, setClicked] = useState(false); ;
    return (
        <div className='flex items-center justify-between'>
            <div className='flex gap-3 items-center'>
                <img src={Logo} alt="Logo" className='rounded-full w-12'/>
                <h1 className='font-bold'>Ankit Bhagat</h1>
            </div>
            <div className='px-5'>
                <FontAwesomeIcon icon={faBars} onClick={() => setClicked(!clicked)}/>
                {       
                    clicked ? 
                    <ul className='flex flex-col w-32 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-zinc-900 justify-center items-start px-3 absolute top-16 right-0 gap-2 font-semibold z-50'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Recent-Works</li>
                        <li>Skills</li>
                        <button className='w-20 h-6 flex items-center justify-center bg-gradient-to-r from-purple-600 to-zinc-900 rounded-full '>Hire Me</button>
                    </ul>: null
                }
            </div>
        </div>
    )
}

export default Navbar