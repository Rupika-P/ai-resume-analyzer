const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function analyzeResume(resumeText) {
  const prompt = `
You are an ATS Resume Expert.

Analyze the following resume.

Provide:
1. ATS Score (0-100)
2. Strengths
3. Weaknesses
4. Missing Skills
5. Resume Summary
6. Suggestions for Improvement

Resume:

${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}

module.exports = analyzeResume;