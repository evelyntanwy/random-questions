import React, { useState } from "react";

function Questions() {
  const intialState = {
    question: "Why did the functional component feel lost?",
    answer: "Because it didn't know what state it was in!",
  };
  const [question, setQuestion] = useState(intialState);

  const handleClick = (e) => {
    console.log(question);
    setQuestion(question);
  };

  return (
    <div>
      <h2>Test</h2>
      <button onClick={handleClick}>Question</button>
      {question.question}
    </div>
  );
}

export default Questions;
