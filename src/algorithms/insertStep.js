const insertStep = (arrayNew, position, arraySteps) => {
    let currentStep = arraySteps[arraySteps.length - 1].slice();
    currentStep.splice(position, arrayNew.length, ...arrayNew);
    arraySteps.push(currentStep)
}

export default insertStep;














































