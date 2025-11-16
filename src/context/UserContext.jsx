import { createContext, useState } from "react";
import main from "../gemini";

export const dataContext = createContext();


function UserContext({ children }) {
    const [input, setInput] = useState("")

    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([])
    
    const newChat=()=>{
        setShowResult(false)
        setLoading(false)
    }

    async function sent(input) {

        setShowResult(true)
        setRecentPrompt(input);
        setLoading(true)
        setPrevPrompt((prevState) => [...prevState, input])
        setInput("")
        const reply = await main(input);
        setResultData(reply.split('**') && reply.split("*"))
        setLoading(false)
    }

    const data = {
        input, setInput, sent, loading, setLoading, showResult, setShowResult, resultData, recentPrompt, setRecentPrompt, loading, prevPrompt,newChat
    };

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    );
}

export default UserContext;
