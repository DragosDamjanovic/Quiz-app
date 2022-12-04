import axios from "axios";
import React, { useState } from "react";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Result from "./screens/Result";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./screens/Login";

export default function App() {
  const [token, setToken] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Home fetchQuestions={fetchQuestions} />}
          ></Route>
          <Route
            path="/quiz"
            element={
              <Quiz
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          ></Route>
          <Route path="/result" element={<Result score={score} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
