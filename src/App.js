import './App.css'
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import About from './pages/About';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
