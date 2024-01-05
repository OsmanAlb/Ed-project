import { useState } from 'react';

export const useMultiSteps = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;
  const step = steps[currentStepIndex];

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (index) => {
    setCurrentStepIndex(index);
  };

  const skip = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return {
    currentStepIndex,
    step,
    steps,
    isFirstStep,
    isLastStep,
    goTo,
    skip,
    next,
    back,
  };
};
