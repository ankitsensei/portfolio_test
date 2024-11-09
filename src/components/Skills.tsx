import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
const Skills = () => {
    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-400 bg-clip-text text-transparent">Skills</h1>
            <p className="text-sm w-80 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sint doloremque consequuntur.</p>
            <div className='mt-5 flex flex-wrap gap-2 '>
                <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                    <FontAwesomeIcon icon={faHtml5} className='text-4xl text-red-600'/>
                    <p>HTML5</p>
                </div>
                <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                    <FontAwesomeIcon icon={faCss3} className='text-4xl text-blue-600'/>
                    <p>CSS3</p>
                </div>
                <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                    <FontAwesomeIcon icon={faJs} className='text-4xl text-yellow-600'/>
                    <p>JavaScript</p>
                </div>
                <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                    <FontAwesomeIcon icon={faReact} className='text-4xl text-blue-600'/>
                    <p>React Js</p>
                </div>
            </div>
        </div>
    )
}

export default Skills