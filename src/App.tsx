import "./App.css";
import React, { useState, useEffect } from "react";
import { Atoms, Molecules, Organisms } from "./components/";

function App() {
  const [InputTextValue, setInputTextValue] = useState<string>("");
  const [userLogin, setUserLogin] = useState<boolean>(false);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  let interval: NodeJS.Timeout | any = undefined;

  const inputEventOnChange = (value: React.SetStateAction<string>) => {
    setInputTextValue(value);
  };

  const buttonEventClick = () => {
    setUserLogin(true);
  };

  const noticesBase = ["default", "success", "error", "warning", "info"];
  const noticesBase2 = [...noticesBase, "disabled"];
  // const noticesBase3 = [
  //   ...noticesBase,
  //   ...noticesBase2,
  //   "primary",
  //   "secondary",
  // ];

  const sizesBase = ["xsmall", "small", "medium"];
  const sizesBase2 = ["xsmall", "small", "default", "medium"];

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

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
            <>
              {sizesBase2.map((sizeValue: any) => {
                return (
                  <div
                    key={sizeValue}
                    className="App-section--container__content"
                  >
                    {noticesBase.map(
                      (value: any): JSX.Element => (
                        <Atoms.Button
                          key={value}
                          handleClick={() => console.log("here")}
                          notice={value}
                          size={sizeValue}
                        >
                          {value}
                        </Atoms.Button>
                      )
                    )}
                  </div>
                );
              })}
            </>
          </div>

          <br />

          <div className="App-section--container__content">
            <>
              {noticesBase2.map(
                (value: any): JSX.Element => (
                  <Atoms.Button
                    key={value}
                    handleClick={() => console.log("here")}
                    isBlock
                    notice={value}
                  >
                    {value}
                  </Atoms.Button>
                )
              )}
            </>
          </div>

          <br />

          <div className="App-section--container__content">
            <>
              {noticesBase2.map(
                (value: any): JSX.Element => (
                  <Atoms.Button
                    key={value}
                    handleClick={() => console.log("here")}
                    notice={value}
                    variant="outlined"
                  >
                    {value}
                  </Atoms.Button>
                )
              )}
            </>
          </div>

          <br />

          <div className="App-section--container__content">
            <>
              {noticesBase2.map(
                (value: any): JSX.Element => (
                  <Atoms.Button
                    key={value}
                    handleClick={() => console.log("here")}
                    notice={value}
                    variant="text"
                  >
                    {value}
                  </Atoms.Button>
                )
              )}
            </>
          </div>
        </section>

        <br />

        <section className="App-section--container">
          <div className="App-section--container__content">
            <>
              {sizesBase2.map((sizeValue: any) => {
                return (
                  <div
                    key={sizeValue}
                    className="App-section--container__content"
                  >
                    {noticesBase.map(
                      (value: any): JSX.Element => (
                        <Atoms.Button
                          key={value}
                          handleClick={() => console.log("here")}
                          notice={value}
                          size={sizeValue}
                          iconName="coffee"
                        >
                          {value}
                        </Atoms.Button>
                      )
                    )}
                  </div>
                );
              })}
            </>
          </div>

          <br />

          <div className="App-section--container__content">
            <>
              {noticesBase2.map(
                (value: any): JSX.Element => (
                  <Atoms.Button
                    key={value}
                    handleClick={() => console.log("here")}
                    isBlock
                    iconName="coffee"
                    notice={value}
                  >
                    {value}
                  </Atoms.Button>
                )
              )}
            </>
          </div>

          <br />

          <div className="App-section--container__content">
            <>
              {noticesBase2.map(
                (value: any): JSX.Element => (
                  <Atoms.Button
                    key={value}
                    handleClick={() => console.log("here")}
                    notice={value}
                    variant="outlined"
                    iconName="coffee"
                  >
                    {value}
                  </Atoms.Button>
                )
              )}
            </>
          </div>

          <br />

          <div className="App-section--container__content">
            <>
              {noticesBase2.map(
                (value: any): JSX.Element => (
                  <Atoms.Button
                    key={value}
                    handleClick={() => console.log("here")}
                    notice={value}
                    variant="text"
                    iconName="coffee"
                  >
                    {value}
                  </Atoms.Button>
                )
              )}
            </>
          </div>
        </section>

        <section className="App-section--container">
          <>
            {sizesBase.map((sizeValue: any) => {
              return (
                <div
                  key={sizeValue}
                  className="App-section--container__content"
                >
                  {noticesBase.map(
                    (value: any): JSX.Element => (
                      <Atoms.Badge key={value} size={sizeValue} notice={value}>
                        {value}
                      </Atoms.Badge>
                    )
                  )}
                </div>
              );
            })}
          </>

          <br />

          <>
            {sizesBase.map((sizeValue: any) => {
              return (
                <div
                  key={sizeValue}
                  className="App-section--container__content"
                >
                  {noticesBase.map(
                    (value: any): JSX.Element => (
                      <Atoms.Badge
                        key={value}
                        iconName="circle-exclamation"
                        size={sizeValue}
                        notice={value}
                      >
                        {value}
                      </Atoms.Badge>
                    )
                  )}
                </div>
              );
            })}
          </>
        </section>

        <section className="App-section--container">
          {(progress === 100 && (
            <Atoms.Button
              handleClick={() => {
                setRunning(false);
                setProgress(0);
              }}
              notice="default"
            >
              Reset ProgressBar
            </Atoms.Button>
          )) || (
            <Atoms.Button
              handleClick={() => setRunning(!running)}
              notice="default"
            >
              {running ? "Stop ProgressBar" : "Start ProgressBar"}
            </Atoms.Button>
          )}
          <br />
          <>
            {noticesBase.map(
              (value: any): JSX.Element => (
                <div key={value} className="App-section--container__content">
                  <Atoms.ProgressBar progress={progress} notice={value} />
                </div>
              )
            )}
          </>
          <br />
          <>
            {sizesBase.map(
              (value: any): JSX.Element => (
                <div key={value} className="App-section--container__content">
                  <Atoms.ProgressBar progress={progress} size={value} />
                </div>
              )
            )}
          </>
        </section>

        <section className="App-section--container">
          <>
            {noticesBase.map(
              (value: any): JSX.Element => (
                <div key={value} className="App-section--container__content">
                  <Organisms.Alert notice={value}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel ratione nostrum, molestiae fugit vero consectetur?
                  </Organisms.Alert>
                </div>
              )
            )}
          </>
        </section>

        <section className="App-section--container">
          <>
            {noticesBase.map(
              (value: any): JSX.Element => (
                <div key={value} className="App-section--container__content">
                  <Organisms.Alert notice={value} dismissible>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel ratione nostrum, molestiae fugit vero consectetur?
                  </Organisms.Alert>
                </div>
              )
            )}
          </>
        </section>

        <section className="App-section--container">
          {(progress === 100 && (
            <Atoms.Button
              handleClick={() => {
                setRunning(false);
                setProgress(0);
              }}
              notice="default"
            >
              Reset ProgressBar
            </Atoms.Button>
          )) || (
            <Atoms.Button
              handleClick={() => setRunning(!running)}
              notice="default"
            >
              {running ? "Stop ProgressBar" : "Start ProgressBar"}
            </Atoms.Button>
          )}
          <br />
          <>
            {noticesBase.map(
              (value: any): JSX.Element => (
                <div key={value} className="App-section--container__content">
                  <Organisms.Alert
                    notice={value}
                    progressBar={progress}
                    dismissible
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel ratione nostrum, molestiae fugit vero consectetur?
                  </Organisms.Alert>
                </div>
              )
            )}
          </>
        </section>

        <section className="App-section--container">
          {(progress === 100 && (
            <Atoms.Button
              handleClick={() => {
                setRunning(false);
                setProgress(0);
              }}
              notice="default"
            >
              Reset ProgressBar
            </Atoms.Button>
          )) || (
            <Atoms.Button
              handleClick={() => setRunning(!running)}
              notice="default"
            >
              {running ? "Stop ProgressBar" : "Start ProgressBar"}
            </Atoms.Button>
          )}
          <br />
          <>
            {noticesBase.map(
              (value: any): JSX.Element => (
                <div key={value} className="App-section--container__content">
                  <Organisms.Alert
                    notice={value}
                    progressBar={progress}
                    dismissible
                    progressBarLabel
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel ratione nostrum, molestiae fugit vero consectetur?
                  </Organisms.Alert>
                </div>
              )
            )}
          </>
        </section>

        <section className="App-section--container">
          {userLogin ? NodeDashboard : NodeLogin}
        </section>
      </header>
    </div>
  );
}

export default App;
