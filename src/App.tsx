import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
const App = () => {
  return (
    <div className="w-full h-screen px-20 py-5 text-white bg-gradient-to-r from-neutral-950 from-10% to-purple-900 to-90%">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App