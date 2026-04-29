import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const generatePrompt = async (input: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); // Use the latest model!
    const result = await model.generateContent(input);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate content");
  }
};
