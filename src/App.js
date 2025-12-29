import React, { useState } from "react";

const questions = [
  {
    question: "Which language is used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "React is a _____?",
    options: ["Database", "Framework", "Library", "Language"],
    answer: "Library",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    answer: "Facebook",
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);

    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      const next = current + 1;
      if (next < questions.length) {
        setCurrent(next);
      } else {
        setShowResult(true);
      }
    }, 700);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>🧠 Quiz App</h1>

        {showResult ? (
          <div>
            <h2>Your Score</h2>
            <h3>
              {score} / {questions.length}
            </h3>
          </div>
        ) : (
          <>
            <h2>
              Question {current + 1}/{questions.length}
            </h2>
            <p>{questions[current].question}</p>

            {questions[current].options.map((option, index) => {
              let buttonStyle = styles.button;

              if (selectedOption === option) {
                buttonStyle = {
                  ...styles.button,
                  background:
                    option === questions[current].answer
                      ? "#4CAF50"
                      : "#f44336",
                };
              }

              return (
                <button
                  key={index}
                  style={buttonStyle}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedOption !== null}
                  className="quiz-option"
                >
                  {option}
                </button>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
  button: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "none",
    background: "#667eea",
    color: "#fff",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.3s",
  },
};

export default App;
