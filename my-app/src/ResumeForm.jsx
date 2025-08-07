import { useState } from "react";
import ResultPanel from "./ResultPanel";
import { analyzeResume } from "./utils/analyze";

export default function ResumeForm() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState(null);

  function handleAnalyze() {
    const analyzed = analyzeResume(resume);
    setResult(analyzed);
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
          marginBottom: "10px"
        }}
      />
      <button
        onClick={handleAnalyze}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Analyze Resume
      </button>

      {result && <ResultPanel result={result} />}
    </div>
  );
}