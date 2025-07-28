import { useState } from 'react'

import './App.css'
import UserListing from './components/UserListing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserListing/>
    </>
  )
}

export default App
