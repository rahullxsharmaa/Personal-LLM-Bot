import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { TiMessage } from "react-icons/ti";

import './Sidebar.css'
import { dataContext } from '../../context/UserContext';

function Sidebar() {
  const [extend, setExtend] = useState(false)
  const { sent, prevPrompt,newChat } = useContext(dataContext)
  async function loadPrevPrompt(prompt){
    sent(prompt)
  }
  return (
    <div className='sidebar'>
      <GiHamburgerMenu id='ham' onClick={() => {
        setExtend((prevState) => !prevState)
      }} />
      <div className='newchat' onClick={()=>{
        newChat()
      }}>
        <AiOutlinePlus />
        {extend ? <p> New Chat </p> : null}
      </div>
      {
        prevPrompt.map(item => (
          <div className='recent' onClick={()=>{
            loadPrevPrompt(item)
          }}>
            <TiMessage />
            {extend ? <p>{item.slice(0,10)+"..."}</p> : null}
          </div>
        ))
      }



    </div>
  )
}

export default Sidebar