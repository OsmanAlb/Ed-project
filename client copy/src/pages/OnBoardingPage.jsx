import {
	FirstStage,
	SecondStage,
	ThirdStage
} from '../components/BoardingStages'
import { Button } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useMultiSteps } from '../hooks/useMultiSteps'
import { PageWrapper } from '../layout/PageWrapper'
const OnBoardingPage = () => {
	const { currentStepIndex, step, steps, isLastStep, skip, next } =
		useMultiSteps([<FirstStage />, <SecondStage />, <ThirdStage />])
	return (
		<PageWrapper>
			{step}
			<div className='flex flex-col items-center'>
				<ProgressBar
					width='99px'
					height='6px'
					index={currentStepIndex + 1}
					length={steps.length}
				/>
				<div className='w-[285px] flex flex-col gap-1 my-10'>
					{!isLastStep && <Button onClick={next}>Next</Button>}
					{isLastStep && (
						<Button link='/'>Let’s Make a Journey</Button>
					)}
					{!isLastStep && (
						<Button onClick={skip} variant='ghost-primary'>
							Skip
						</Button>
					)}
				</div>
			</div>
		</PageWrapper>
	)
}

export default OnBoardingPage
