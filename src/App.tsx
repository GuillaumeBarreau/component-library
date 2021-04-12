import './App.css';
import {Button} from "./components"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          handleClick={() => console.log("here")}
        >
          Button
        </Button>
        <Button
          handleClick={() => console.log("here")}
          notice="success"
        >
          Button
        </Button>
        <Button
          handleClick={() => console.log("here")}
          notice="info"
        >
          Button
        </Button>
        <Button
          handleClick={() => console.log("here")}
          notice="warning"
        >
          Button
        </Button>
        <Button
          handleClick={() => console.log("here")}
          notice="error"
        >
          Button
        </Button>
        <Button
          handleClick={() => console.log("here")}
          notice="disabled"
        >
          Button
        </Button>
      </header>
    </div>
  );
}

export default App;
