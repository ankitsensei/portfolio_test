import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, } from '@fortawesome/free-brands-svg-icons'
const Skills = () => {
    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-400 bg-clip-text text-transparent">Skills</h1>
            <p className="text-sm w-80 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sint doloremque consequuntur.</p>
            <div className='mt-5 w-80 flex flex-wrap gap-2 '>
                <div className='text-center '>
                    <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                        <FontAwesomeIcon icon={faHtml5} className='text-4xl text-red-600'/>
                    </div>
                    <p className='text-sm'>HTML5</p>
                </div>
                <div className='text-center '>
                    <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                        <FontAwesomeIcon icon={faCss3} className='text-4xl text-blue-600'/>
                    </div>
                    <p className='text-sm'>CSS3</p>
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                        <FontAwesomeIcon icon={faJs} className='text-4xl text-yellow-600'/>
                    </div>
                        <p className='text-sm'>JavaScript</p>
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                        <img src="https://logospng.org/download/typescript/typescript-1024.png" alt="typescript" className='w-10' />
                    </div>
                        <p className='text-sm'>TypeScript</p>
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                        <FontAwesomeIcon icon={faReact} className='text-4xl text-blue-600'/>
                    </div>
                        <p className='text-sm'>React Js</p>
                </div>
                <div className='text-center'>
                <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                    <img src="https://img.icons8.com/fluency/452/tailwind_css.png" alt="Pr" className='w-10'/>
                </div>
                    <p className='text-sm'>Tailwind CSS</p>
                </div>
                <div className='text-center'>
                <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                    <img src="https://macjpeg.mac89.com/macw/icon/202006/22090310_408e561b5e.png" alt="Pr" className='w-10'/>
                </div>
                    <p className='text-sm'>Premier Pro</p>
                </div>
                <div className='text-center'>
                <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                    <img src="https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/6/74418/files/2020/07/After-Effects-980x956.png" alt="Pr" className='w-10'/>
                </div>
                    <p className='text-sm'>After Effect</p>
                </div>
                <div className='text-center'>
                <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                    <img src="https://i.pinimg.com/originals/b9/17/be/b917be411ae50407eed800fd5514c4e2.png" alt="Pr" className='w-12'/>
                </div>
                    <p className='text-sm'>Photoshop</p>
                </div>
                <div className='text-center'>
                <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                <img src="https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png"     alt="Pr" className='w-6'/>
                </div>
                    <p className='text-sm'>Figma</p>
                </div>
                <div className='text-center'>
                <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                <img src="https://pnghq.com/wp-content/uploads/adobe-illustrator-logo-png-see-through-background-768x768.png"     alt="Pr" className='w-10'/>
                </div>
                    <p className='text-sm'>Illustrator</p>
                </div>
                <div>
                    <div className='w-24 h-24 bg-white bg-opacity-5 flex flex-col items-center justify-center rounded-lg gap-1'>
                    <img src="https://cdn.icon-icons.com/icons2/3053/PNG/512/davinci_resolve_alt_macos_bigsur_icon_190260.png"     alt="Pr" className='w-12'/>
                    </div>
                    <p className='text-sm'>Davinci Resolve</p>
                </div>
            </div>
        </div>
    )
}

export default Skills