import { useState } from 'react'
import Navbar from '@/scenes/navbar/Navbar'

function App () {
  const [selectedPage, setSelectedPage] = useState<string>('home')

  return (
    <div className='App'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
