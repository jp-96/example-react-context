import React from 'react'
import Logo from './Logo';  // logo.svg ==> Log0.tsx
//import './App.css'; // ==> ../index.html
import { useContextConsumer } from './data/CustomContext';

function App() {
  const {state, set, remove} = useContextConsumer();

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
        <p style={{textAlign:"left", width: "600px"}}>
          <button onClick={() => set("keyA", (state["keyA"] ?? "") + "+")}>設定</button><button onClick={() => remove("keyA")}>削除</button> keyA:{state["keyA"] ?? "(undefined)"} <br/>
          <button onClick={() => set("keyB", (state["keyB"] ?? "") + "+")}>設定</button><button onClick={() => remove("keyB")}>削除</button> keyB:{state["keyB"] ?? "(undefined)"} <br/>
          <button onClick={() => set("keyC", (state["keyC"] ?? "") + "+")}>設定</button><button onClick={() => remove("keyC")}>削除</button> keyC:{state["keyC"] ?? "(undefined)"} <br/>
          <button onClick={() => set("keyD", (state["keyD"] ?? "") + "+")}>設定</button><button onClick={() => remove("keyD")}>削除</button> keyD:{state["keyD"] ?? "(undefined)"} <br/>
        </p>
      </header>
    </div>
  );
}

export default App;
