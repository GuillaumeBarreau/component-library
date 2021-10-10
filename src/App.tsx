import "./App.css";
import React, {useState} from "react";
import { Atoms, Molecules } from "./components/";

function App() {

  const [InputTextValue, setInputTextValue] = useState<string>("");
  const [userLogin, setUserLogin] = useState<boolean>(false);

  const inputEventOnChange = (value: React.SetStateAction<string>) => {
    setInputTextValue(value)
  }

  const buttonEventClick = () => {
    setUserLogin(true)
  }

  const NodeLogin = (
    <>
      <Atoms.Input 
        handleOnChange={(e) => inputEventOnChange(e.target.value)} 
        placeholder="login"
        value={InputTextValue}
      />
        <Atoms.Button 
          handleClick={buttonEventClick} 
          notice={(InputTextValue) ? "info" : "disabled"}
        >
        disabled
      </Atoms.Button>
    </>
  )

  const NodeDashboard =  (
    null
  )

  return (
    <div className="App">
      <header className="App-header">
        <section className="App-section--container">
          <Atoms.Button handleClick={() => console.log("here")}>default</Atoms.Button>
          <Atoms.Button handleClick={() => console.log("here")} notice="success">
            success
          </Atoms.Button>
          <Atoms.Button handleClick={() => console.log("here")} notice="info">
            info
          </Atoms.Button>
          <Atoms.Button handleClick={() => console.log("here")} notice="warning">
            warning
          </Atoms.Button>
          <Atoms.Button handleClick={() => console.log("here")} notice="error">
            error
          </Atoms.Button>
          <Atoms.Button handleClick={() => console.log("here")} notice="disabled">
            disabled
          </Atoms.Button>
        </section>
        <section className="App-section--container">
          <Molecules.Question>Molecules.Question</Molecules.Question>
          <Molecules.Answer handleClick={() => null}>Molecules.Answer</Molecules.Answer>
        </section>
        <section className="App-section--container">
          {
            userLogin 
            ?  
              NodeDashboard
            :  
             NodeLogin
          }
        </section>
      </header>
    </div>
  );
}

export default App;
