import {useState, useRef} from 'react';
import Video1 from "../assets/videoEdits/videoEdit1.gif"
import Video2 from "../assets/videoEdits/videoEdit2.gif"
import Video3 from "../assets/videoEdits/videoEdit3.gif"
import Video4 from "../assets/videoEdits/videoEdit4.gif"

import Website1 from "../assets/websiteSs/Website1.png"
import Website2 from "../assets/websiteSs/Website2.png"
import Website3 from "../assets/websiteSs/Website3.png"
import Website4 from "../assets/websiteSs/Website4.png"
const RecentWorks = () => {
    const [videoBtn, setVideoBtn] = useState(true)
    const [websiteBtn, setWebsiteBtn] = useState(true)

    const allBtnRef = useRef<HTMLButtonElement>(null)
    const videoBtnRef = useRef<HTMLButtonElement>(null)
    const websiteBtnRef = useRef<HTMLButtonElement>(null)
    const allHandleClick = () => {
        setVideoBtn(true)
        setWebsiteBtn(true)
        if (allBtnRef.current) {
            allBtnRef.current.style.backgroundColor = "purple";
        }
        if (videoBtnRef.current) {
            videoBtnRef.current.style.backgroundColor = "transparent";
        }
        if (websiteBtnRef.current) {
            websiteBtnRef.current.style.backgroundColor = "transparent";
        }
    }
    const videoHandleClick = () => {
        setVideoBtn(true)
        setWebsiteBtn(false)
        if (allBtnRef.current){
            allBtnRef.current.style.backgroundColor = "transparent";
        }
        if (videoBtnRef.current){
            videoBtnRef.current.style.backgroundColor = "purple";
        }
        if (websiteBtnRef.current){
            websiteBtnRef.current.style.backgroundColor = "transparent"
        }
    }
    const websiteHandleClick = () => {
        setVideoBtn(false)
        setWebsiteBtn(true)
        if (allBtnRef.current){
            allBtnRef.current.style.backgroundColor = "transparent";
        }
        if (videoBtnRef.current){
            videoBtnRef.current.style.backgroundColor = "transparent";
        }
        if (websiteBtnRef.current){
            websiteBtnRef.current.style.backgroundColor = "purple"
        }
    }
    return (
        <div className="mt-20 flex flex-col items-center">
            
            <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-400 bg-clip-text text-transparent">Recent Works</h1>
            <div className="flex gap-3 bg-black px-4 py-2 rounded-lg lg:mt-2">
                <button className="AllBtn w-20 h-7 bg-[#7f007f] rounded-md" onClick={() => allHandleClick()} ref={allBtnRef}>All</button>
                <button className="VideoBtn w-20 h-7 rounded-md" onClick={() => videoHandleClick()} ref={videoBtnRef}>Videos</button>
                <button className="WebsiteBtn w-20 h-7 rounded-md" onClick={() => websiteHandleClick()} ref={websiteBtnRef}>Websites</button>
            </div>
            
            {
                videoBtn ? 
                <div className="flex flex-wrap items-center justify-center gap-5 mt-5 lg:mt-10">
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md lg:w-80">
                    <img src={Video1} alt="video1" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md lg:w-80">
                    <img src={Video2} alt="video2" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md lg:w-80">
                    <img src={Video3} alt="video2" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md lg:w-80">
                    <img src={Video4} alt="video2" className="p-2 rounded-lg"/>
                </div>
            </div> : null
            }
            {
                websiteBtn ?
                <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md lg:w-80">
                    <img src={Website1} alt="video1" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md lg:w-80">
                    <img src={Website2} alt="video2" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md lg:w-80">
                    <img src={Website3} alt="video2" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md lg:w-80">
                    <img src={Website4} alt="video2" className="p-2 rounded-lg"/>
                </div>
            </div> : null
            }
        </div>
    )
}

export default RecentWorks