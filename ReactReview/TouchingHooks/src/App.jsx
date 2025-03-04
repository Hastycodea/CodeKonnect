import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Andreh')

  return (
    <>
    <button onClick={() => setName('Juju')}>{name}</button>
    </>
  )
}

export default App
