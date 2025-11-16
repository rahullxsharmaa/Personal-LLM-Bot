import { GoogleGenAI } from "@google/genai";

// I have removed api-key for privacy 

const ai = new GoogleGenAI({apiKey:api});

const main= async(prompt)=> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${prompt}`,
  });
  console.log(response.text);
  return response.text
}

export default main;



