import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SingleCocktail from "./component/SingleCocktail";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Login" component={Login} />
        <Route path="/Home/Cocktail/:id" component={SingleCocktail} />

        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
