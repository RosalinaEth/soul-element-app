import React from "react";
import { useSearchParams } from "react-router-dom";
import { resultData } from "@/lib/resultData";

export const getResultInfo = (resultKey: string) => {
  return resultData[resultKey] || resultData["Unknown"];
};

const ResultPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const resultKey = searchParams.get("result") || "Unknown";
  const result = getResultInfo(resultKey);

  const handleShare = () => {
    const shareText = encodeURIComponent(result.shareText);
    const shareUrl = `https://farcaster.xyz/~/compose?text=${shareText}&embeds=https://soul-element.vercel.app`;
    window.open(shareUrl, "_blank");
  };

  const handleRestart = () => {
    window.location.href = "/quiz";
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{result.title}</h1>
      <img src={`/${result.image}`} alt={result.title} style={styles.image} />
      <p style={styles.description}>{result.description}</p>

      <button style={styles.button} onClick={handleShare}>
        🔮 Share on Farcaster
      </button>

      <button style={{ ...styles.button, backgroundColor: "#4CAF50", marginTop: "12px" }} onClick={handleRestart}>
        🔁 try again
      </button>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 600,
    margin: "0 auto",
    textAlign: "center",
    padding: "24px",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "16px",
  },
  description: {
    fontSize: "18px",
    marginBottom: "24px",
  },
  button: {
    backgroundColor: "#5A4FCF",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default ResultPage;
