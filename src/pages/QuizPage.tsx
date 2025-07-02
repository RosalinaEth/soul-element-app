import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "@/lib/quizData";

const QuizPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState({
    Water: 0,
    Air: 0,
    Earth: 0,
    Fire: 0,
  });

  const navigate = useNavigate();

  const handleAnswer = (element: "Water" | "Air" | "Earth" | "Fire") => {
    setScore((prevScore) => ({
      ...prevScore,
      [element]: prevScore[element] + 1,
    }));

    if (currentStep + 1 === questions.length) {
      // احسبي النتيجة النهائية
      const sorted = Object.entries(score)
        .map(([key, value]) => [key, key === element ? value + 1 : value]) // نحدث السطر الحالي
        .sort((a, b) => b[1] as number - a[1] as number);

      const top = sorted[0][1];
      const topElements = sorted.filter(([, val]) => val === top).map(([key]) => key);
      const resultKey = topElements.sort().join(" + "); // عشان يطابق `resultData`

      navigate(`/result?result=${encodeURIComponent(resultKey)}`);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const question = questions[currentStep];

  return (
    <div style={styles.container}>
      <h2 style={styles.step}>{`Question ${currentStep + 1} of ${questions.length}`}</h2>
      <p style={styles.question}>{question.text}</p>
      <div style={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => handleAnswer(option.element)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 600,
    margin: "0 auto",
    padding: 24,
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  step: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: "bold",
  },
  question: {
    fontSize: 22,
    marginBottom: 20,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  button: {
    padding: "12px 16px",
    backgroundColor: "#5A4FCF",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontSize: 16,
    cursor: "pointer",
  },
};

export default QuizPage;
