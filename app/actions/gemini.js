"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateBlogContent(title) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const result = await model.generateContent(
    `Write a detailed blog post on: ${title}`
  );

  return result.response.text();
}

export async function improveContent(content, type = "enhance") {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const promptMap = {
    enhance: `Improve this content and make it more engaging:\n\n${content}`,
    expand: `Expand this content with more details:\n\n${content}`,
    simplify: `Simplify this content and make it easy to read:\n\n${content}`,
  };

  const result = await model.generateContent(
    promptMap[type] || promptMap.enhance
  );

  return result.response.text();
}
