type Props = {
	questions: string;
	answers: string[];
	callback: any;
	userAnswer: any;
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
				{answers.map((answer) => (
					<button
						disabled={userAnswer}
						onClick={callback}
						value={answer}
						key={answer}
					>
						<span dangerouslySetInnerHTML={{ __html: answer }}></span>
					</button>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
