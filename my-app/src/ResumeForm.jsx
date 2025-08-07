import { useState } from "react";
import ResultPanel from "./ResultPanel";
import { analyzeResumeAI } from "./utils/analyzeAI";

export default function ResumeForm() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    setLoading(true);
    const aiResult = await analyzeResumeAI(resume);
    setResult(aiResult);
    setLoading(false);
  }

  return (
    <div>
      <textarea
        placeholder="Paste your resume here..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          padding: "10px",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={handleAnalyze}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {loading ? "Analyzing..." : "Analyze with AI"}
      </button>

      {result && <ResultPanel result={result} />}
    </div>
  );
}
