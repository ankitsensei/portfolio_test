import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
// import Boxes from "./components/Boxes"
const App = () => {
  return (
    <div className="w-full h-screen px-2 py-2 text-white bg-gradient-to-r from-neutral-950 from-10% to-purple-900 to-90%">
      <Navbar/>
      <Hero/>
      {/* <Boxes/> */}
    </div>
  )
}

export default App