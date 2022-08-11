import React from 'react';

import './App.css';
import QuestionCard from './components/question-card.component';

function App() {
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
			<QuestionCard />
			<button className='button_next' onClick={nextQuestion}>
				Next!
			</button>
		</div>
	);
}

export default App;
