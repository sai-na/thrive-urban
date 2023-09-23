import React, { useState } from "react";

const StepsComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { title: "Register", class: "step step-primary" },
    { title: "Choose plan", class: "step step-primary" },
    { title: "Purchase", class: "step" },
    { title: "Receive Product", class: "step" },
  ];

  const handleStepClick = (index) => {
    // Update current step
    setCurrentStep(index + 1);

    // Apply 'step-primary' class to all previous steps
    for (let i = 0; i < index; i++) {
      steps[i].class = "step step-primary";
    }
  };

  return (
    <ul className="steps my-8 w-full over steps-vertical steps-lg xl:steps-horizontal">
      {steps.map((step, index) => (
        <li
          key={index}
          className={
            currentStep === index + 1 ? `${step.class} active` : step.class
          }
          onClick={() => handleStepClick(index)}
        >
          {step.title}
        </li>
      ))}
    </ul>
  );
};

export default StepsComponent;
