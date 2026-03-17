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
  const [count, setCount] = useState(0)

  return (
   <div>
    <Topnav></Topnav>
    <Home></Home>
    <Display></Display>
    <Registrations></Registrations>
    <Footer></Footer>

   </div>
  )
}

export default App
