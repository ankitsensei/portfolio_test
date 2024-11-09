import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Boxes from "./components/Boxes"
import QualityServices from "./components/QualityServices"
import RecentWorks from "./components/RecentWorks"
import Skills from "./components/Skills"
const App = () => {  
  return (
    <div className="w-full h-full px-2 py-2 text-white bg-gradient-to-r from-neutral-950 from-10% to-purple-900 to-90% lg:px-20">
      <Navbar/>
      <div className="lg:h-screen">
        <Hero/>
        <Boxes/>
      </div>
      <QualityServices/>
      <RecentWorks/>
      <Skills/>
    </div>
  )
}

export default App