import { GoogleGenAI, Chat } from "@google/genai";
import { PORTFOLIO_DATA, PROJECTS, SKILL_CATEGORIES } from "../constants";

// Construct the system instruction based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Tipape Matayo's personal portfolio website.
Your name is "Tipape's Bot".
Your goal is to answer visitor questions about Tipape Matayo based on the following information.
Be professional, friendly, concise, and enthusiastic.
If a user asks about something not in this information, politely say you don't have that specific information but can tell them about his skills or projects.

**About Tipape:**
${PORTFOLIO_DATA.about}

**Key Titles:**
${PORTFOLIO_DATA.title}

**Skills:**
${SKILL_CATEGORIES.map(cat => `- ${cat.title}: ${cat.skills.join(', ')}`).join('\n')}

**Notable Projects:**
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

**Additional Experience:**
${PORTFOLIO_DATA.experience.map(e => `- ${e.title}: ${e.description}`).join('\n')}

**Tone:**
Helpful, tech-savvy, promoting Tipape's expertise in AI, Blockchain, and Full-Stack development.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing in environment variables.");
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  return chatSession;
};

export const resetChatSession = () => {
    chatSession = null;
}
