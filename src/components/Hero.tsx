import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Logo from "../assets/ben10.jpg"

const Hero = () => {
    return (
        <div className="mt-10 flex flex-col gap-5 items-center w-full h-full">
            <div className="flex flex-col items-center gap-5 px-2 order-2">
                <h3 className="font-bold text-xl">I am Ankit</h3>
                <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-500 to-zinc-100 bg-clip-text text-transparent">Web Developer + Video Editor</h1>
                <p className="flex flex-wrap w-80 text-purple-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus exercitationem soluta reprehenderit sequi beatae. Deleniti, a! Similique obcaecati beatae laborum saepe, consequuntur eum.</p>
                <div className='flex flex-wrap gap-4 items-center'>
                    <button className="w-[200px] h-[50px] p-5 flex items-center justify-around px rounded-full border-2 border-purple-600 text-purple-600">
                        Hire Me <FontAwesomeIcon icon={faChevronRight} />
                    </button>
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
                </div>
            </div>
            <div className="w-1/2 flex justify-center order-1">
                <img src={Logo} alt="profile" className="w-[400px] rotate-6 rounded-3xl" />
            </div>
        </div>
    )
}

export default Hero