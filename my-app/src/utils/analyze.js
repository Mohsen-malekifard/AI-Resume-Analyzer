export function analyzeResume(text) {
  const length = text.length;
  const score = Math.min(100, Math.floor(length / 10 + Math.random() * 20));

  const feedback = [];

  if (!text.toLowerCase().includes("react"))
    feedback.push("Add your React skills.");

  if (!text.toLowerCase().includes("team"))
    feedback.push("Mention team collaboration experience.");

  if (length < 300)
    feedback.push("Resume seems too short. Add more details.");

  if (feedback.length === 0)
    feedback.push("Looks good! Maybe tailor it to specific job roles.");

  return { score, feedback };
}