import { AnswerObject } from '../App';
import '../css/question-card.scss';
type Props = {
	questions: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	currentQuestionNumber: number;
	totalQuestionsNumber: number;
};
const QuestionCard: React.FC<Props> = ({
	questions,
	answers,
	callback,
	userAnswer,
	currentQuestionNumber,
	totalQuestionsNumber,
}) => {
	return (
		<div className='questionCard'>
			<p className='questionCardNumber'>
				Question {currentQuestionNumber} of {totalQuestionsNumber}
			</p>
			<p className='questionCardText'>{questions}</p>
			<div className='questionCardAnswers'>
				{answers.map((answer) => {
					const isClickedCorrect =
						userAnswer?.answer === answer && userAnswer?.isCorrect
							? 'questionCardAnswerButton_correct'
							: '';

					const isUserClicked =
						userAnswer?.answer === answer
							? 'questionCardAnswerButton_clicked'
							: '';

					let classes = `questionCardAnswerButton ${isUserClicked} ${isClickedCorrect}`;
					return (
						<button
							disabled={!!userAnswer}
							onClick={callback}
							value={answer}
							key={answer}
							className={classes}
						>
							<span dangerouslySetInnerHTML={{ __html: answer }}></span>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default QuestionCard;
