import React, { Component } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import "./Quiz.css";

export default class Quiz extends Component {
  // initiating the local state
  state = {
    questions: {
      1: "What African country is known as the Pearl of Africa?",
      2: "What is MERN Stack?",
      3: "What is the capital of Nigeria?",
    },
    answers: {
      1: {
        1: "Uganda",
        2: "South Africa",
        3: "Ghana",
      },
      2: {
        1: "MySQL ExpressJs React NodeJs",
        2: "MongoDB ExpressJs Angular Python",
        3: "MongoDB ExpressJs React NodeJs",
      },
      3: {
        1: "Johannesburg",
        2: "Abuja",
        3: "Nairobi",
      },
    },
    correctAnswers: {
      1: "1",
      2: "3",
      3: "2",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  render() {
    let {
      questions,
      answers,
      correctAnswer,
      clickedAnswer,
      step,
      score,
    } = this.state;
    return (
      <div className="Content">
        {step <= Object.keys(questions).length ? (
          <>
            <Question question={questions[step]} />
            <Answer
              answer={answers[step]}
              step={step}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <button
              className="NextStep"
              disabled={
                clickedAnswer && Object.keys(questions).length >= step
                  ? false
                  : true
              }
              onClick={() => this.nextStep(step)}
            >
              Next
            </button>
          </>
        ) : (
          <div className="finalPage">
            <h1>You have completed the quiz!</h1>
            <p>
              Your score is: {score} of {Object.keys(questions).length}
            </p>
            <p>Thank you!</p>
          </div>
        )}
      </div>
    );
  }
}
