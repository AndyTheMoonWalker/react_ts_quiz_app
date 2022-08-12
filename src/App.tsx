import React, { useState } from 'react';

import './App.css';
import QuestionCard from './components/question-card.component';

const TOTAL_Q = 10;

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
	const [userAnswer, setUserAnswer] = useState([]);
	const [score, setScore] = useState(0);
	const [isGameOver, setIsGameOver] = useState(true);
	const start = async () => {};
	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
	const nextQuestion = () => {};
	return (
		<div className='App'>
			<h1>Quiz Game</h1>
			<button className='button_start' onClick={start}>
				Start!
			</button>
			<p>Score</p>
			<p>Loading ...</p>
			<QuestionCard
				currentQuestionNumber={currentQuestionNumber + 1}
				questions={questions[currentQuestionNumber].question}
				totalQuestionsNumber={TOTAL_Q}
				answers={questions[currentQuestionNumber].answers}
				userAnswer={userAnswer ? userAnswer[currentQuestionNumber] : undefined}
				callback={checkAnswer}
			/>
			<button className='button_next' onClick={nextQuestion}>
				Next!
			</button>
		</div>
	);
}

export default App;
