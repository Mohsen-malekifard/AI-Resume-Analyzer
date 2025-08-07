export default function ResultPanel({ result }) {
  return (
    <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ddd" }}>
      <h2>AI Score: {result.score}/100</h2>
      <h3>Feedback:</h3>
      <ul>
        {result.feedback.map((fb, index) => (
          <li key={index}>{fb}</li>
        ))}
      </ul>
    </div>
  );
}