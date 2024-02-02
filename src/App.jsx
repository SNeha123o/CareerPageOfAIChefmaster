import { useState } from 'react'
import Page1 from './components/Page1.jsx'
import Page2 from './components/Page2.jsx'
import CareerPage from './components/CareerPage.jsx'
import InterviewAtAichefmaster from './components/InterviewAtAichefmaster';
import HiringProcess from './components/HiringProcess';
import { AboutUs } from './components/AboutUs';
import AiFacts from './components/AiFacts';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page1 />
      <Page2 />
      <CareerPage />
      <InterviewAtAichefmaster/>
      <HiringProcess/>
      <AiFacts/>
      <AboutUs/>
    </>
  )
}

export default App
