import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SingleCocktail from "./Pages/SingleCocktail";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/cocktail/:id">
          <SingleCocktail />
        </Route>

        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
