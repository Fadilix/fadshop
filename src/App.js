import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './index.css';
import Products from './components/Products';
import Pricing from './components/Pricing';
import About from "./components/About"
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/products">
              <Products />
            </Route>

            <Route path="/pricing">
              <Pricing />
            </Route>

            <Route path="/about">
             <About />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;