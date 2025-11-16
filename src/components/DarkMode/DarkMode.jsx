import React, { useState ,useEffect
} from 'react'
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

import './DarkMode.css'

const DarkMode = () => {
    const [mode, setMode] = useState("dark-mode")

    function toggle() {
        if (mode === 'dark-mode') {
            setMode('light-mode')
        } else {
            setMode('dark-mode')
        }
    }

    useEffect(() => {
        document.body.className = mode
    }, [mode])

    return (
        <button className='dark-mode-btn' onClick={() => toggle()}>{mode==='dark-mode'?<IoSunnySharp/>:<FaMoon/>}</button>
    )
}

export default DarkMode