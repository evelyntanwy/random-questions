import React, { useState } from "react";

function Questions() {
  const initialState = {
    question: "Why did the functional component feel lost?",
    answer: "Because it didn't know what state it was in!",
  };
  const [question, setQuestion] = useState(initialState);

  const handleClick = (e) => {
    console.log("ques", question);
    console.log("setques", setQuestion);

    setQuestion(e.target.value);
  };

  return (
    <div>
      <h2>Test</h2>
      <p>{question.question}</p>
      <button onClick={handleClick} value={question.answer}>
        Question
      </button>
    </div>
  );
}

export default Questions;
