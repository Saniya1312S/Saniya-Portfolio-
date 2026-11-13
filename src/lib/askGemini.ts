import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

if (!apiKey) {
  console.warn('Missing REACT_APP_GEMINI_API_KEY. Gemini chats will be disabled.');
}

export const hasGeminiKey = Boolean(apiKey);

const defaultModel = 'gemini-2.5-flash';
const genAI = hasGeminiKey ? new GoogleGenerativeAI(apiKey as string) : null;

export async function askGemini(prompt: string, modelName: string = defaultModel): Promise<string> {
  if (!genAI) {
    throw new Error('REACT_APP_GEMINI_API_KEY is not configured.');
  }

  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return response && response.trim().length ? response.trim() : "I couldn't generate an answer.";
  } catch (error) {
    console.error('Gemini error:', error);
    return 'Gemini had trouble processing the request.';
  }
}
