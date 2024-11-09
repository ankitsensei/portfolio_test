import {useState} from 'react';
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

    const allHandleClick = () => {
        setVideoBtn(true)
        setWebsiteBtn(true)
        const AllBtn = document.querySelector(".AllBtn")
            
    }
    const videoHandleClick = () => {
        // here
    }
    const websiteHandleClick = () => {
        // here
    }
    return (
        <div className="mt-20 flex flex-col items-center">
            
            <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-400 bg-clip-text text-transparent">Recent Works</h1>
            <div className="flex gap-3 bg-black px-4 py-2 rounded-lg">
                <button className="AllBtn w-20 h-7 bg-rose-600 rounded-md" onClick={() => allHandleClick()}>All</button>
                <button className="VideoBtn w-20 h-7 bg-rose-600 rounded-md" onClick={() => videoHandleClick()}>Videos</button>
                <button className="WebsiteBtn w-20 h-7 bg-rose-600 rounded-md" onClick={() => websiteHandleClick()}>Websites</button>
            </div>
            
            {
                videoBtn ? 
                <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md">
                    <img src={Video1} alt="video1" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md">
                    <img src={Video2} alt="video2" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md">
                    <img src={Video3} alt="video2" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md">
                    <img src={Video4} alt="video2" className="p-2 rounded-lg"/>
                </div>
            </div> : null
            }
            {
                websiteBtn ?
                <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md">
                    <img src={Website1} alt="video1" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md">
                    <img src={Website2} alt="video2" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md">
                    <img src={Website3} alt="video2" className="p-2 rounded-lg"/>
                </div>
                <div className="w-40 h-full bg-white bg-opacity-10 rounded-md">
                    <img src={Website4} alt="video2" className="p-2 rounded-lg"/>
                </div>
            </div> : null
            }
        </div>
    )
}

export default RecentWorks