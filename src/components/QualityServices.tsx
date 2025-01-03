
const QualityServices = () => {
    return (
        <div className="lg:flex lg:flex-col lg:items-center">
            <div className="mt-20 flex flex-col items-center lg:pb-10">
                <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-400 bg-clip-text text-transparent">Quality Services</h1>
                <p className="flex items-center justify-center text-sm w-full px-10 text-center lg:mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae vero repellendus explicabo, amet blanditiis maxime error veniam corrupti labore, quibusdam, sit natus.</p>
            </div>
            <div className="flex flex-col gap-2 mt-4 lg:w-1/2 lg:">
                <div className="w-full h-16 flex gap-10 items-center justify-between px-10 rounded-lg bg-gradient-to-r from-purple-600 to-violet-950 ">
                    <h1 className="font-bold text-xl w-40">Editing</h1>
                    <p className="w-80 lg:w-full">I edit videos for Weddings, YouTube, Instagram, etc. </p>
                </div>
                <div className="w-full h-16 flex gap-10 items-center justify-between px-10 rounded-lg bg-gradient-to-r from-purple-600 to-violet-950 ">
                    <h1 className="font-bold text-xl w-40">Website</h1>
                    <p className="w-80 lg:w-full">I use mostly use React Js for building websites.</p>
                </div>  
            </div>
        </div>
    )
}

export default QualityServices