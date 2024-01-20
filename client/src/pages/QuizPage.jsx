import { useState, useEffect } from 'react'
import { Button } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'

const QuizPage = ({ idQuiz }) => {
	const [index, setIndex] = useState(0)
	const [to, setTo] = useState(0)
	const [currentQuestion, setCurrentQuestion] = useState({
		id: '',
		question: '',
		image: '',
		tips: []
	})

	const quiz = {
		id: 1,
		questions: [
			{
				id: 1,
				question:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper et eu, commodo, lacus. Semper urna nunc dictum duis adipiscing aenean scelerisque in porta. Magna viverra auctor tortor elementum. Arcu cras egestas erat condimentum mattis quam justo.',
				image: '/src/assets/images/quiz-page-image.png',
				tips: [
					'A. Lorem Ipsum',
					'B. Lorem Ipsum',
					'C. Lorem Ipsum',
					'D. Lorem Ipsum'
				]
			},
			{
				id: 2,
				question:
					'Consectetur adipiscing elit. Arcu cras egestas erat condimentum mattis quam justo. Semper et eu, commodo, lacus. Semper urna nunc dictum duis adipiscing aenean scelerisque in porta. Magna viverra auctor tortor elementum.',
				image: false,
				tips: [
					'A. Ipsum Lorem ',
					'B. Ipsum Lorem',
					'C. Ipsum Lorem',
					'D. Ipsum Lorem'
				]
			},
			{
				id: 3,
				question: 'Consectetur adipiscing elit.',
				image: false,
				tips: [
					'A. Ipsum Lorem ',
					'B. Ipsum Lorem',
					'C. Ipsum Lorem',
					'D. Ipsum Lorem'
				]
			}
		]
	}

	useEffect(() => {
		setCurrentQuestion(quiz.questions[index])
		setIndex(1)
		setTo(quiz.questions.length)
	}, [])

	const nextQuestion = () => {
		if (index < quiz.questions.length) {
			setIndex(index + 1)
			setCurrentQuestion(quiz.questions[index])
		} else {
			setCurrentQuestion(quiz.questions[quiz.questions.length - 1])
		}
	}

	return (
		<div
			style={{ paddingBottom: '5rem' }}
			className='flex flex-col font-normal'
		>
			<div className='flex flex-col items-center'>
				<div className='flex items-center gap-[15px] w-full mt-[18px] mb-[50px]'>
					<div
						className='relative w-[24px] h-[24px] cursor-pointer
                      before:absolute before:bottom-[12px] before:left-[6px] before:block before:w-[12px] before:h-[1px] before:bg-[#181818] before:rotate-[45deg]
                      after:absolute after:bottom-[12px] after:left-[6px] after:block after:w-[12px] after:h-[1px] after:bg-[#181818] after:rotate-[-45deg]
                      '
					></div>
					<ProgressBar
						index={index}
						length={to}
						width={'214px'}
						height={'8px'}
					/>
				</div>
				<div className='mb-[15px]'>
					<p className='text-center text-[14px] leading-[24px] font-normal'>
						{currentQuestion.question}
					</p>
				</div>
				<div className='mb-[20px]'>
					<p className='text-center text-[#4F4F4F] text-[12px] leading-[24px]'>
						{index} of {to}
					</p>
				</div>
				{currentQuestion.image && (
					<div className='mb-[30px]'>
						<img src={currentQuestion.image} alt='quiz-image' />
					</div>
				)}
				<div className={`flex flex-wrap mx-[-11px] mb-[20px]`}>
					{currentQuestion.tips.map((item, i) => {
						return (
							<Button
								key={i}
								className='mb-[20px] mx-[11px] w-[160px] 
                                    h-[64px] py-[20px] px-[28px]
                                    text-center text-[14px] leading-[24px]'
								variant='outline'
								size={'small'}
							>
								{item}
							</Button>
						)
					})}
				</div>
			</div>
			<div className='absolute left-0 bottom-5 w-full'>
				<Button
					className='w-full text-[18px] leading-[28px]'
					variant='primary'
					onClick={nextQuestion}
				>
					{index === quiz.questions.length ? 'Finish' : 'Continue'}
				</Button>
			</div>
		</div>
	)
}

export default QuizPage
