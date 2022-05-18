import "./App.css";
import React, { useState } from "react";
import { Atoms, Molecules, Organisms } from "./components/";

function App() {
  const [InputTextValue, setInputTextValue] = useState<string>("");
  const [userLogin, setUserLogin] = useState<boolean>(false);

  const inputEventOnChange = (value: React.SetStateAction<string>) => {
    setInputTextValue(value);
  };

  const buttonEventClick = () => {
    setUserLogin(true);
  };

  const eventHandleClick = () => console.log("eventHandleClick");

  const NodeLogin = (
    <>
      <Atoms.Input
        handleOnChange={(e) => inputEventOnChange(e.target.value)}
        placeholder="login"
        namedInput="login"
        labelDescription="login"
        value={InputTextValue}
      />
      <Atoms.Button
        handleClick={buttonEventClick}
        notice={InputTextValue ? "info" : "disabled"}
      >
        disabled
      </Atoms.Button>
    </>
  );

  const NodeDashboard = null;

  return (
    <div className="App">
      <header className="App-header">
        <section className="App-section--container">
          <div className="App-section--container__content">
            <Atoms.Button
              notice="primary"
              handleClick={() => console.log("here")}
              size="medium"
            >
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="secondary"
              size="medium"
            >
              success
            </Atoms.Button>
          </div>
        </section>

        <section className="App-section--container">
          <div className="App-section--container__content">
            <Atoms.Button handleClick={() => console.log("here")} size="xsmall">
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              size="xsmall"
            >
              success
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="info"
              size="xsmall"
            >
              info
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              size="xsmall"
            >
              warning
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              size="xsmall"
            >
              error
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              size="xsmall"
            >
              disabled
            </Atoms.Button>
          </div>

          <div className="App-section--container__content">
            <Atoms.Button handleClick={() => console.log("here")} size="small">
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              size="small"
            >
              success
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="info"
              size="small"
            >
              info
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              size="small"
            >
              warning
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              size="small"
            >
              error
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              size="small"
            >
              disabled
            </Atoms.Button>
          </div>

          <div className="App-section--container__content">
            <Atoms.Button handleClick={() => console.log("here")}>
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
            >
              success
            </Atoms.Button>
            <Atoms.Button handleClick={() => console.log("here")} notice="info">
              info
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
            >
              warning
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
            >
              error
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
            >
              disabled
            </Atoms.Button>
          </div>

          <div className="App-section--container__content">
            <Atoms.Button handleClick={() => console.log("here")} size="medium">
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              size="medium"
            >
              success
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="info"
              size="medium"
            >
              info
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              size="medium"
            >
              warning
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              size="medium"
            >
              error
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              size="medium"
            >
              disabled
            </Atoms.Button>
          </div>

          <br />

          <div className="App-section--container__content">
            <Atoms.Button handleClick={() => console.log("here")} isBlock>
              default Block
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              isBlock
            >
              success Block
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="info"
              isBlock
            >
              info Block
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              isBlock
            >
              warning Block
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              isBlock
            >
              error Block
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              isBlock
            >
              disabled Block
            </Atoms.Button>
          </div>
        </section>

        <section className="App-section--container">
          <div className="App-section--container__content">
            <Atoms.Button
              handleClick={() => console.log("here")}
              size="xsmall"
              iconName="coffee"
            >
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              size="xsmall"
              iconName="coffee"
            >
              success
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="info"
              size="xsmall"
              iconName="coffee"
            >
              info
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              size="xsmall"
              iconName="coffee"
            >
              warning
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              size="xsmall"
              iconName="coffee"
            >
              error
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              size="xsmall"
              iconName="coffee"
            >
              disabled
            </Atoms.Button>
          </div>

          <div className="App-section--container__content">
            <Atoms.Button
              handleClick={() => console.log("here")}
              size="small"
              iconName="coffee"
            >
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              size="small"
              iconName="coffee"
            >
              success
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="info"
              size="small"
              iconName="coffee"
            >
              info
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              size="small"
              iconName="coffee"
            >
              warning
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              size="small"
              iconName="coffee"
            >
              error
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              size="small"
              iconName="coffee"
            >
              disabled
            </Atoms.Button>
          </div>

          <div className="App-section--container__content">
            <Atoms.Button
              handleClick={() => console.log("here")}
              iconName="coffee"
            >
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              iconName="coffee"
            >
              success
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="info"
              iconName="coffee"
            >
              info
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              iconName="coffee"
            >
              warning
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              iconName="coffee"
            >
              error
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              iconName="coffee"
            >
              disabled
            </Atoms.Button>
          </div>

          <div className="App-section--container__content">
            <Atoms.Button
              handleClick={() => console.log("here")}
              size="medium"
              iconName="coffee"
            >
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              size="medium"
              iconName="coffee"
            >
              success
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="info"
              size="medium"
              iconName="coffee"
            >
              info
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              size="medium"
              iconName="coffee"
            >
              warning
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              size="medium"
              iconName="circle-xmark"
            >
              error
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              size="medium"
              iconName="coffee"
            >
              disabled
            </Atoms.Button>
          </div>

          <br />

          <div className="App-section--container__content">
            <Atoms.Button
              handleClick={() => console.log("here")}
              isBlock
              iconName="coffee"
            >
              default Block
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              isBlock
              iconName="coffee"
            >
              success Block
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="info"
              isBlock
              iconName="coffee"
            >
              info Block
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              isBlock
              iconName="coffee"
            >
              warning Block
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              isBlock
              iconName="coffee"
            >
              error Block
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              isBlock
              iconName="coffee"
            >
              disabled Block
            </Atoms.Button>
          </div>

          <br />

          <div className="App-section--container__content">
            <Atoms.Button
              handleClick={() => console.log("here")}
              variant="outlined"
            >
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              variant="outlined"
            >
              success
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              variant="outlined"
              notice="info"
            >
              info
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              variant="outlined"
            >
              warning
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              variant="outlined"
            >
              error
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              variant="outlined"
            >
              disabled
            </Atoms.Button>
          </div>

          <br />

          <div className="App-section--container__content">
            <Atoms.Button
              handleClick={() => console.log("here")}
              variant="text"
            >
              default
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="success"
              variant="text"
            >
              success
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              variant="text"
              notice="info"
            >
              info
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="warning"
              variant="text"
            >
              warning
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="error"
              variant="text"
            >
              error
            </Atoms.Button>
            <Atoms.Button
              handleClick={() => console.log("here")}
              notice="disabled"
              variant="text"
            >
              disabled
            </Atoms.Button>
          </div>
        </section>

        <section className="App-section--container">
          <div className="App-section--container__content">
            <Atoms.Badge size="xsmall">default</Atoms.Badge>
            <Atoms.Badge notice="success" size="xsmall">
              success
            </Atoms.Badge>
            <Atoms.Badge notice="info" size="xsmall">
              info
            </Atoms.Badge>
            <Atoms.Badge notice="warning" size="xsmall">
              warning
            </Atoms.Badge>
            <Atoms.Badge notice="error" size="xsmall">
              error
            </Atoms.Badge>
          </div>

          <div className="App-section--container__content">
            <Atoms.Badge size="small">default</Atoms.Badge>
            <Atoms.Badge notice="success" size="small">
              success
            </Atoms.Badge>
            <Atoms.Badge notice="info" size="small">
              info
            </Atoms.Badge>
            <Atoms.Badge notice="warning" size="small">
              warning
            </Atoms.Badge>
            <Atoms.Badge notice="error" size="small">
              error
            </Atoms.Badge>
          </div>

          <div className="App-section--container__content">
            <Atoms.Badge>default</Atoms.Badge>
            <Atoms.Badge notice="success">success</Atoms.Badge>
            <Atoms.Badge notice="info">info</Atoms.Badge>
            <Atoms.Badge notice="warning">warning</Atoms.Badge>
            <Atoms.Badge notice="error">error</Atoms.Badge>
          </div>

          <br />

          <div className="App-section--container__content">
            <Atoms.Badge iconName="circle-exclamation" size="xsmall">
              default
            </Atoms.Badge>
            <Atoms.Badge
              iconName="circle-exclamation"
              notice="success"
              size="xsmall"
            >
              success
            </Atoms.Badge>
            <Atoms.Badge
              iconName="circle-exclamation"
              notice="info"
              size="xsmall"
            >
              info
            </Atoms.Badge>
            <Atoms.Badge
              iconName="circle-exclamation"
              notice="warning"
              size="xsmall"
            >
              warning
            </Atoms.Badge>
            <Atoms.Badge
              iconName="circle-exclamation"
              notice="error"
              size="xsmall"
            >
              error
            </Atoms.Badge>
          </div>

          <div className="App-section--container__content">
            <Atoms.Badge iconName="circle-exclamation" size="small">
              default
            </Atoms.Badge>
            <Atoms.Badge
              iconName="circle-exclamation"
              notice="success"
              size="small"
            >
              success
            </Atoms.Badge>
            <Atoms.Badge
              iconName="circle-exclamation"
              notice="info"
              size="small"
            >
              info
            </Atoms.Badge>
            <Atoms.Badge
              iconName="circle-exclamation"
              notice="warning"
              size="small"
            >
              warning
            </Atoms.Badge>
            <Atoms.Badge
              iconName="circle-exclamation"
              notice="error"
              size="small"
            >
              error
            </Atoms.Badge>
          </div>

          <div className="App-section--container__content">
            <Atoms.Badge iconName="circle-exclamation">default</Atoms.Badge>
            <Atoms.Badge iconName="circle-exclamation" notice="success">
              success
            </Atoms.Badge>
            <Atoms.Badge iconName="circle-exclamation" notice="info">
              info
            </Atoms.Badge>
            <Atoms.Badge iconName="circle-exclamation" notice="warning">
              warning
            </Atoms.Badge>
            <Atoms.Badge iconName="circle-exclamation" notice="error">
              error
            </Atoms.Badge>
          </div>
        </section>

        <section className="App-section--container">
          <div className="App-section--container__content">
            <Atoms.ProgressBar
              progessMax={100}
              progessMin={1}
              progress={100}
              notice="primary"
            />
          </div>

          <div className="App-section--container__content">
            <Atoms.ProgressBar
              progessMax={100}
              progessMin={1}
              progress={100}
              notice="secondary"
            />
          </div>

          <br />

          <div className="App-section--container__content">
            <Atoms.ProgressBar
              progessMax={100}
              progessMin={1}
              progress={25}
              notice="info"
            />
          </div>

          <div className="App-section--container__content">
            <Atoms.ProgressBar
              progessMax={100}
              progessMin={1}
              progress={50}
              notice="success"
            />
          </div>

          <div className="App-section--container__content">
            <Atoms.ProgressBar
              progessMax={100}
              progessMin={1}
              progress={75}
              className="progressBar"
              notice="error"
            />
          </div>

          <div className="App-section--container__content">
            <Atoms.ProgressBar
              progessMax={100}
              progessMin={1}
              progress={100}
              className="progressBar"
              notice="warning"
            />
          </div>

          <br />

          <div className="App-section--container__content">
            <Atoms.ProgressBar
              progessMax={100}
              progessMin={1}
              progress={25}
              size="small"
              notice="primary"
            />
          </div>

          <div className="App-section--container__content">
            <Atoms.ProgressBar
              progessMax={100}
              progessMin={1}
              progress={50}
              size="xsmall"
              notice="secondary"
            />
          </div>

          <div className="App-section--container__content">
            <Atoms.ProgressBar
              progessMax={100}
              progessMin={1}
              progress={75}
              notice="primary"
            />
          </div>

          <div className="App-section--container__content">
            <Atoms.ProgressBar
              progessMax={100}
              progessMin={1}
              progress={100}
              size="medium"
              notice="secondary"
            />
          </div>
        </section>

        <section className="App-section--container">
          <div className="App-section--container__content">
            <Organisms.Alert handleClick={eventHandleClick}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione nostrum, molestiae fugit vero consectetur?
            </Organisms.Alert>
          </div>

          <div className="App-section--container__content">
            <Organisms.Alert handleClick={eventHandleClick} notice="info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione nostrum, molestiae fugit vero consectetur?
            </Organisms.Alert>
          </div>

          <div className="App-section--container__content">
            <Organisms.Alert handleClick={eventHandleClick} notice="success">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione nostrum, molestiae fugit vero consectetur?
            </Organisms.Alert>
          </div>

          <div className="App-section--container__content">
            <Organisms.Alert handleClick={eventHandleClick} notice="warning">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione nostrum, molestiae fugit vero consectetur?
            </Organisms.Alert>
          </div>

          <div className="App-section--container__content">
            <Organisms.Alert handleClick={eventHandleClick} notice="error">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione nostrum, molestiae fugit vero consectetur?
            </Organisms.Alert>
          </div>
        </section>

        <section className="App-section--container">
          <div className="App-section--container__content">
            <Organisms.Alert>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione nostrum, molestiae fugit vero consectetur?
            </Organisms.Alert>
          </div>

          <div className="App-section--container__content">
            <Organisms.Alert notice="info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione nostrum, molestiae fugit vero consectetur?
            </Organisms.Alert>
          </div>

          <div className="App-section--container__content">
            <Organisms.Alert notice="success">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione nostrum, molestiae fugit vero consectetur?
            </Organisms.Alert>
          </div>

          <div className="App-section--container__content">
            <Organisms.Alert notice="warning">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione nostrum, molestiae fugit vero consectetur?
            </Organisms.Alert>
          </div>

          <div className="App-section--container__content">
            <Organisms.Alert notice="error">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione nostrum, molestiae fugit vero consectetur?
            </Organisms.Alert>
          </div>
        </section>

        <section className="App-section--container">
          {userLogin ? NodeDashboard : NodeLogin}
        </section>
      </header>
    </div>
  );
}

export default App;
