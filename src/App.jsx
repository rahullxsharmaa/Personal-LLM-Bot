import React, { useContext } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import ChatSection from './components/chatSection/ChatSection'
import { dataContext } from './context/UserContext'


const App = () => {

  return (
    <>
      <Sidebar />
      <ChatSection />
    </>
  )
}

export default App