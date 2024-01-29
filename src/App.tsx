import { useEffect, useState } from 'react'
import Navbar from '@/scenes/navbar/Navbar'
import { SelectedPage } from './shared/types'
import Home from './scenes/home/Home'
import Benefits from './scenes/benefits'
import OurClasses from './scenes/ourClasses'
import ContactUS from './scenes/contactUs/Contact'

function App () {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }

      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [isTopOfPage])

  return (
    <div
      className='App bg-gray-20'
    >
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home
        setSelectedPage={setSelectedPage}
      />
      <Benefits
        setSelectedPage={setSelectedPage}
      />
      <OurClasses
        setSelectedPage={setSelectedPage}
      />
      <ContactUS
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
