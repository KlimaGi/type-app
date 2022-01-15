import logo from "./logo.svg";
import "./App.css";

function App() {
  // let firstValue: string = 'Many;
  // let firstValue: number = 34;
  // let firstValue: boolean = fasle;
  // let firstValue: number[] = [1, 36, 7];
  let firstValue: Array<string> = ["1", "36", "7"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
        </p>
      </header>
    </div>
  );
}

export default App;
