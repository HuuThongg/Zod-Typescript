import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FramerMotion from './components/FramerMotion'
import SideMenu from './components/SideMenu'
import TransformColorButton from './components/TransformColorButton'
import ViewCard from './components/ViewCard'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=" min-h-screen bg-white w-screen  m-0 p-0 flex justify-center items-center text-black">
      {/* <FramerMotion/> */}
      {/* <SideMenu/> */}
      <TransformColorButton/>
    </div>
    <div className='overflow-scroll'>

      {/* <ViewCard/> */}
      <Layout/>
    </div>
    </>

  )
}

export default App
