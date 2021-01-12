import { BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="grid-container">
          <header>
            <Header />
          </header>
          <main>products List</main>
          <footer>All right is reserved</footer>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
