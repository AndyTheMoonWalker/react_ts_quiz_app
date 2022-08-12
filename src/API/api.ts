import { shuffleAnswers } from './../utils/utils';
export enum Level {
	EASY = 'easy',
	NORMAL = 'normal',
	HARD = 'hard',
}

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuiz = async (amount: number, difficulty: Level) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=19&type=multiple`;
	const data = await (await fetch(endpoint)).json();
	return data.results.map((question: Question) => ({
		...question,
		answers: shuffleAnswers([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};
