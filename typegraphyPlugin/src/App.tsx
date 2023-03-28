import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typo from './components/Typo'
import ReactMarkdown from './components/ReactMarkdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
      <Typo/>
      <ReactMarkdown/>
    </div>
  )
}

export default App
