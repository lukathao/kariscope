import { ReactElement, useState } from "react";

//handles the state of steps
export function multistepForm(steps: ReactElement[]) {
    //default set to 0
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next() {
        setCurrentStepIndex((i: number) => {
            if (i >= steps.length -1) return i
            return i + 1
        })
    }

    function back() {
        setCurrentStepIndex((i: number) => {
            if (i <= 0) return i
            return i - 1
        })

    }

    function goTo(index: number) {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        goTo,
        next,
        back,
        steps
    }
}
