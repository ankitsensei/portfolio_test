import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import Logo from "../assets/ben10.jpg"

const Hero = () => {
    return (
        <div className="mt-10 flex flex-col gap-5 items-center w-full h-full">
            <div className="flex flex-col items-center gap-5 px-2 order-2">
                <h3 className="font-bold text-xl">I am Ankit</h3>
                <h1 className="font-bold text-5xl bg-gradient-to-r from-purple-500 to-zinc-100 bg-clip-text text-transparent">Web Developer + Video Editor</h1>
                <p className=" text-purple-200">Hi, I am Ankit Bhagat, currently in 1st year of B.Tech in Computer Science and Engineering. I love making <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>websites</span> and <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>edit videos</span>.</p>
                <div className='flex flex-col gap-5 items-center'>
                    <button className="w-40 h-12 p-5 flex items-center justify-around px rounded-full border-2 border-purple-600 text-purple-400">
                        Hire Me <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <div className='flex items-center gap-5'>
                        <a href="https://www.instagram.com/ankitsensei" target='_blank'>
                            <button className='w-12 h-12 rounded-full border-2 border-purple-600 text-purple-600'>
                                <FontAwesomeIcon icon={faInstagram} className='text-2xl' />
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/ankit-bhagat-139276241/" target='_blank'>
                            <button className='w-12 h-12 rounded-full border-2 border-purple-600 text-purple-600'>
                                <FontAwesomeIcon icon={faLinkedinIn} className='text-xl' />
                            </button>
                        </a>
                        <a href="https://x.com/ankit_sensei" target='_blank'>
                            <button className='w-12 h-12 rounded-full border-2 border-purple-600 text-purple-600'>
                                <FontAwesomeIcon icon={faXTwitter} className='text-xl' />
                            </button>
                        </a>
                        <a href="https://github.com/ankitsensei" target='_blank'>
                            <button className='w-12 h-12 rounded-full border-2 border-purple-600 text-purple-600'>
                                <FontAwesomeIcon icon={faGithub} className='text-2xl' />
                            </button>
                        </a>
                    </div>
                        
                </div>
            </div>
            <div className="w-1/2 flex justify-center order-1">
                <img src={Logo} alt="profile" className="w-[400px] rotate-6 rounded-3xl" />
            </div>
        </div>
    )
}

export default Hero