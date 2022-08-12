import React, { useState } from 'react';
import { fetchQuiz, Level, QuestionState } from './API/api';

import './App.css';
import QuestionCard from './components/question-card.component';

const TOTAL_Q = 10;
type AnswerObject = {
	question: string;
	answer: string;
	isCorrect: boolean;
	correctAnswer: string;
};
function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
	const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [isGameOver, setIsGameOver] = useState(true);
	const start = async () => {
		setIsLoading(true);
		setIsGameOver(false);

		const newQuestions = await fetchQuiz(TOTAL_Q, Level.EASY);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswer([]);
		setCurrentQuestionNumber(0);
		setIsLoading(false);
	};
	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!isGameOver) {
			const answer = e.currentTarget.value;
			const isCorrect =
				questions[currentQuestionNumber].correct_answer === answer;
			if (isCorrect) {
				setScore((prev) => (prev = +1));
			}
			const answerObj = {
				question: questions[currentQuestionNumber].question,
				answer,
				isCorrect,
				correctAnswer: questions[currentQuestionNumber].correct_answer,
			};
			setUserAnswer((prev) => [...prev, answerObj]);
		}
	};
	const nextQuestion = () => {};

	return (
		<div className='App'>
			<h1>Quiz Game</h1>
			{(isGameOver || userAnswer.length === TOTAL_Q) && (
				<button className='button_start' onClick={start}>
					Start!
				</button>
			)}

			{!isGameOver && <p>Score: {score}</p>}
			{isLoading && <p>Loading ...</p>}
			{!isLoading && !isGameOver && (
				<QuestionCard
					currentQuestionNumber={currentQuestionNumber + 1}
					questions={questions[currentQuestionNumber].question}
					totalQuestionsNumber={TOTAL_Q}
					answers={questions[currentQuestionNumber].answers}
					userAnswer={
						userAnswer ? userAnswer[currentQuestionNumber] : undefined
					}
					callback={checkAnswer}
				/>
			)}
			{!isGameOver &&
				!isLoading &&
				currentQuestionNumber === userAnswer.length + 1 &&
				currentQuestionNumber !== TOTAL_Q - 1 && (
					<button className='button_next' onClick={nextQuestion}>
						Next!
					</button>
				)}
		</div>
	);
}

export default App;
