import React from 'react';
import './Answer.css';

const Answer = (props) => {
    // looping through the answers
    let answer = Object.keys(props.answer)
        .map((questionAnswer, i) => (
            <li 
            className = 
            {
                props.correctAnswer === questionAnswer ?
                'correct' :
                props.clickedAnswer === questionAnswer ?
                'incorrect' : ''
            }
            onClick={() => props.checkAnswer(questionAnswer)}
            key={questionAnswer}>
                {props.answer[questionAnswer]}
            </li>
        ));

    return (
        <>
            <ul disabled={props.clickedAnswer ? true : false} 
            className="Answers">
            {answer}
            </ul>
            <div>
                {
                    props.correctAnswer ?
                    'Correct answer!' :
                    props.clickedAnswer ? 'Incorrect answer!' : ''
                }
            </div>
        </>
    )
}

export default Answer
