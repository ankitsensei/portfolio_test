import Logo from "../assets/ben10.jpg"
const Hero = () => {
    return (
        <div className="flex justify-between items-center w-full h-full">
            <div className="flex flex-col gap-5 flex-wrap w-1/2">
                <h3 className="font-bold text-3xl">I am Ankit</h3>
                <h1 className="font-bold text-7xl bg-gradient-to-r from-purple-500 to-zinc-100 bg-clip-text text-transparent">Web Developer + Video Editor</h1>
                <p className="w-[500px] text-purple-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus exercitationem soluta reprehenderit sequi beatae. Deleniti, a! Similique obcaecati beatae laborum saepe, consequuntur eum.</p>
            </div>
            <div className="w-1/2 flex justify-center">
                <img src={Logo} alt="profile" className="w-[400px] rotate-6 rounded-3xl" />
            </div>
        </div>
    )
}

export default Hero