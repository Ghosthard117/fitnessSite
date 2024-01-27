import { useState } from 'react'
import Navbar from '@/scenes/navbar/Navbar'
import { SelectedPage } from './shared/types'

function App () {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <div
      className='App bg-gray-20'
    >
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
