import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import data from "./data";

import Question from "./components/question/Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <h3>Questions And Answers About Login</h3>
      <section className="info">
        <Question questions={questions} />
      </section>
    </div>
  );
}

export default App;
