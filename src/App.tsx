import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

function App() {
  // tuple
  let aTuple: [string, number] = ["Liza", 34];
  // enum
  enum Codes {
    first = 1,
    second = 2,
  }
  // any
  let firstName: any = 9;
  // void
  const warning = (): void => {
    console.log("Warning");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstName} is of {typeof firstName} type!
        </p>
        <Message />
      </header>
    </div>
  );
}

export default App;
