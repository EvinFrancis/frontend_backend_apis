import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Display from './pages/Display'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Topnav from './pages/Topnav'
import Registrations from './pages/Registrations'

function App() {
  const [studId, setStudId] = useState()



  return (
   <div>
    <Topnav></Topnav>
    <Home></Home>
    <Display setStudId={setStudId}></Display>
{/* setStudId---> used to dispaly_student  where the edit button is displayed used  */}

    <Registrations studId={studId}></Registrations>
    {/* studId---> used to add new student {registrion} ,
    that means from whrer the data is shoen and update  */}
    <Footer></Footer>

   </div>
  )
}

export default App
