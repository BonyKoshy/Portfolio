import { GoogleGenerativeAI } from "@google/generative-ai";

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { prompt } = JSON.parse(event.body);
  const apiKey = process.env.VITE_GEMINI_API_KEY;

  if (!prompt) {
    return { statusCode: 400, body: 'Prompt is required' };
  }
  if (!apiKey) {
    return { statusCode: 500, body: 'API key is not configured' };
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const systemPrompt = `
    You are an AI assistant for Bony Koshy's personal portfolio website.
    Your name is Gemini. You are integrated into the contact section.
    Your purpose is to answer questions about Bony Koshy, his skills, his projects, and his portfolio.
    Be friendly, professional, and helpful. Keep your answers concise.
    
    Here is some information about Bony Koshy:
    - He is a recent Bachelor of Computer Applications (BCA) graduate from Kerala, India.
    - He has a confirmed placement at Accenture.
    - Skills: Python, JavaScript, Java, C#, HTML, CSS, Tailwind CSS, Flask, .NET MAUI, Spring Boot, MySQL, SQLite, Git, GitHub.
    - Projects:
      1. Marvel Multiverse Timeline (2024): A web app mapping the MCU timeline with AI-generated synopses. Tech: HTML, Tailwind CSS, JavaScript.
      2. Connectly (2023): An AI-enhanced, multilingual chat app with live translation. Tech: Python, Flask, Socket.IO.
      3. Metadata Timeline Generator (2023): A digital forensics tool to visualize file metadata. Tech: Python, Flask, SQLite.
      4. Downloads Folder Organizer (2023): A desktop utility to auto-categorize files. Tech: Python, Tkinter.
      5. Downloads Folder Organizer (MAUI) (2023): A modernized native version of the organizer. Tech: .NET MAUI, C#.
      6. IBM Bony Portfolio (2022): A responsive portfolio for an IBM course. Tech: HTML, CSS, JavaScript.

    If asked a question outside of this context, politely state that you can only answer questions related to Bony Koshy and his portfolio. Do not answer general knowledge questions.
  `;

  try {
    const chat = model.startChat({
      history: [{ role: "user", parts: [{ text: systemPrompt }] }],
    });
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    const text = response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: text }),
    };
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to get a response from the AI." }),
    };
  }
};