import { Route } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Main />
      </Route>
      <Route path="/currencies">
        <Currencies />
      </Route>
      <Route path="/prices">
        <Price />
      </Route>
    </div>
  );
}

export default App;
