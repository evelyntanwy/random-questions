import "./App.css";
import Question from "./components/Question";

function App() {
  state = {
    question: "What is the world's deepest lake?",
    answer: "Lake Baikal, in Russian Siberia",
  };

  revealAnswerHandler = (event) => {
    this.setState({ question: this.state.answer });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>What is the Question Today</h1>>
      </header>

      <Question
        question={this.state.question}
        click={this.revealAnswerHandler}
      />
    </div>
  );
}

export default App;
