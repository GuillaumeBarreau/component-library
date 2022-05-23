import "./App.css";
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import { Atoms, Molecules, Organisms } from "./components/";

function App() {
  const [InputTextValue, setInputTextValue] = useState<string>("");
  const [userLogin, setUserLogin] = useState<boolean>(false);

  const inputEventOnChange = (value: React.SetStateAction<string>) => {
    setInputTextValue(value);
  };

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const buttonEventClick = () => {
    setUserLogin(true);
  };

  const [progress, setProgress] = useState<number>(0);
  const interval: any = useRef(null);

  useEffect(() => {
    let val = progress;
    interval.current = setInterval(() => {
      val += 10;

      if (val >= 100) {
        val = 100;
      }

      setProgress(val);
    }, 500);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, [progress]);

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
                  <Molecules.Alert notice={value}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel ratione nostrum, molestiae fugit vero consectetur?
                  </Molecules.Alert>
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
                  <Molecules.Alert notice={value} handleClick={() => null}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel ratione nostrum, molestiae fugit vero consectetur?
                  </Molecules.Alert>
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
                  <Molecules.Alert
                    notice={value}
                    progressBar={randomNumber(1, 100)}
                    handleClick={() => null}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel ratione nostrum, molestiae fugit vero consectetur?
                  </Molecules.Alert>
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
                  <Molecules.Alert
                    notice={value}
                    progressBar={progress}
                    handleClick={() => null}
                    progressBarLabel
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel ratione nostrum, molestiae fugit vero consectetur?
                  </Molecules.Alert>
                </div>
              )
            )}
          </>
        </section>

        <section className="App-section--container">
          <>
            {noticesBase2.map(
              (value: any): JSX.Element => (
                <div key={value} className="App-section--container__content">
                  <Atoms.Link notice={value} href={"/"}>
                    Lorem ipsum dolor
                  </Atoms.Link>
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
