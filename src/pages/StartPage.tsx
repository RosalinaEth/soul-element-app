import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Discover Your Soul Element</h1>
      <p style={styles.subtitle}>Answer 35 quick questions to reveal your core element</p>
      <button style={styles.button} onClick={handleStart}>
        Start Quiz
      </button>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    textAlign: "center",
    fontFamily: "sans-serif",
    backgroundColor: "#181818",
    color: "#fff",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "32px",
  },
  button: {
    backgroundColor: "#5A4FCF",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "14px 28px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default StartPage;
