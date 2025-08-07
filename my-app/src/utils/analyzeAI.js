import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export async function analyzeResumeAI(resumeText) {
  const prompt = `
You are a professional job recruiter. Analyze the following resume and give a score out of 100.
Also, provide a list of 3-5 suggestions to improve it.

Resume:
${resumeText}

Return JSON with:
- score (number)
- feedback (array of strings)
`;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo", // یا gpt-4
    messages: [
      { role: "system", content: "You are a helpful career assistant." },
      { role: "user", content: prompt }
    ],
  });

  const result = response.data.choices[0].message.content;

  try {
    return JSON.parse(result);
  } catch (error) {
    return {
      score: 50,
      feedback: ["AI response could not be parsed. Try again or adjust resume."]
    };
  }
}
