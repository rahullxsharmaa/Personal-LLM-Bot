import React, { useContext } from 'react'
import './ChatSection.css'
import DarkMode from '../DarkMode/DarkMode'
import { IoSendSharp } from "react-icons/io5";
import { dataContext } from '../../context/UserContext';
import user from '../../assets/user.png'
import ai from '../../assets/ai.png'

const ChatSection = () => {

  let { sent, input, setInput, showResult, resultData, recentPrompt, loading } = useContext(dataContext)

  const sendingPrompt = async () => {
    return await sent(input)
  }

  return (
    <div className='chat-section'>
      <div className="top-section">
        {!showResult ? <div className='headings'>

          <span>WELCOME RAHUL</span>
          <span>I'm your personal assistant</span>
          <span>How can I help you?</span>
        </div> : <div className='result'>
          <div className="user-box">
            <img src={user} alt="rahul's icons" width="50px" />
            <p>{recentPrompt}</p>
          </div>
          <div className='ai-box'>
            <img src={ai} alt="bot's icon" width="50px" />
            {loading ? <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> : <p>{resultData}</p>}

          </div>
        </div>}

      </div>
      <div className="bottom-section">
        <input onChange={(e) => {
          setInput(e.target.value)
        }} type='text' placeholder='Type Here ...' value={input} />
        {
          input ? <button className='sent-btn' onClick={sendingPrompt}><IoSendSharp /></button> : null
        }

        <DarkMode className='dark-mode-btn' />
      </div>

    </div>
  )
}

export default ChatSection