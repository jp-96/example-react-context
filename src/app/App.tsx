import React from 'react'
import Logo from './Logo';  // logo.svg ==> Log0.tsx
//import './App.css'; // ==> ../index.html
import { useData } from './provider/DataContext';

function App() {
  const {data, set, remove} = useData();

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/app/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <button onClick={() => set("keyA", (data["keyA"] ?? "ValueA ") + "+")}>設定1</button>
          <button onClick={() => set("keyB", (data["keyB"] ?? "ValueB ") + "+")}>設定2</button>
          <button onClick={() => set("keyC", (data["keyC"] ?? "ValueC ") + "+")}>設定3</button>
          <button onClick={() => set("keyD", (data["keyD"] ?? "ValueD ") + "+")}>設定4</button>
        </p>
        <p>
          <button onClick={() => remove("keyA")}>削除1</button>
          <button onClick={() => remove("keyB")}>削除2</button>
          <button onClick={() => remove("keyC")}>削除3</button>
          <button onClick={() => remove("keyD")}>削除4</button>
        </p>
        <pre>
          {JSON.stringify(data,null,4)}
        </pre>
      </header>
    </div>
  );
}

export default App;
