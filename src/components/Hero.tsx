import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,  faLocationDot, faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import Logo from "../assets/ben10.jpg"

const Hero = () => {
    return (        
        <div className="mt-20 flex flex-col gap-5 items-center w-full lg:flex-row lg:mt-40">
            <div className="flex flex-col items-center gap-5 px-2 order-2 lg:order1 lg:items-start">
                <h3 className="font-bold text-xl lg:text-3xl">I am Ankit <span className='text-sm font-normal lg:text-xl'>(He/Him)</span></h3>
                <h1 className="font-bold text-5xl bg-gradient-to-r from-purple-500 to-zinc-100 bg-clip-text text-transparent lg:text-8xl">Web Developer + Video Editor</h1>
                <p className="text-purple-200 lg:text-lg lg:w-2/3">Hi, I am Ankit Bhagat, currently in 1st year of B.Tech in Computer Science and Engineering. I love making <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>websites</span> and <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>edit videos</span>.</p>
                <div className='flex flex-col items-start lg:mt-5'> 
                    <div className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faLocationDot} className='text-purple-600'/>
                        <p>Ranchi, Jharkhand, India</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faUserGraduate} className='text-purple-600'/>
                        <p>Jhrakhand Rai University</p>
                    </div>  
                </div>
                <div className='flex flex-col gap-2 items-center justify-center lg:mt-5'>
                    <button className="w-40 h-12 p-5 flex items-center justify-around px rounded-full border-2 border-purple-600 text-purple-400">
                        Hire Me <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <div className='flex items-center gap-1'>
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
            <div className="w-1/2 flex justify-center order-1 lg:order-2">
                <img src={Logo} alt="profile" className="w-[400px] rotate-6 rounded-3xl" />
            </div>
        </div>
    )
}

export default Hero