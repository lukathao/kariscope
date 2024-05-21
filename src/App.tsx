import { AccountForm } from "./AccountForm"
import { AddressForm } from "./AddressForm"
import { UserForm } from "./UserForm"
import { multistepForm } from "./multistepForm"

function App() {
  const {currentStepIndex, step, steps, isFirstStep, isLastStep, next, back} = multistepForm([
  <UserForm />, 
  <AddressForm />, 
  <AccountForm />])
  return (
    <div style={{
      position: "relative",
      background: "white",
      border: "1px solid black",
      padding: "2rem",
      margin: "1rem",
      borderRadius: ".5rem",
      fontFamily: "Arial",
    }}>
      <form>
        <div style={{
          position: "absolute",
          top: ".5rem",
          right: ".5rem",
        }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={{
          marginTop: "1rem",
          display: "flex",
          gap: ".5rem",
          justifyContent: "flex-end",
        }}>
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="button" onClick={next}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  )
  
}

export default App
