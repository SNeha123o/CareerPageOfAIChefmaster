import { useState } from 'react'
import Page1 from './components/Page1.jsx'
import Page2 from './components/Page2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page1 />
      <Page2 />
    </>
  )
}

export default App
