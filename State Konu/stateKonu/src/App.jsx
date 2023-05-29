import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () =>{

    setCount(count+1)
  }
  return (
    <>
      <div className='App'></div>
      <button onClick={handleClick} >Kurs Ekle</button>
      <div>Kurs Sayısı: {count}</div>
    </>
  )
}

export default App
