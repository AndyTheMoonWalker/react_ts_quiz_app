type Props = {
	question: string;
	answers: string[];
	callback: any;
	userAnswer: any;
	currentQuestionNumber: number;
	totalQuestionsNumber: number;
};
const QuestionCard: React.FC<Props> = ({
	question,
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
			<p className='questionCardText'>{question}</p>
			<div className='questionCardAnswers'>
				{answers.map((answer) => (
					<button disabled={userAnswer} onClick={callback}>
						<span dangerouslySetInnerHTML={{ __html: answer }}></span>
					</button>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
