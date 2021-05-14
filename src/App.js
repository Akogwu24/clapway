import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Science from './pages/SciencePage';
import Cannabis from './pages/CannabisPage';
import Crypto from './pages/CryptoPage';
import Games from './pages/GamesPage';
import Services from './pages/ServicesPage';
import Featured from './pages/FeaturedPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/science'>
            <Science />
          </Route>
          <Route exact path='/crypto'>
            <Crypto />
          </Route>
          <Route exact path='/games'>
            <Games />
          </Route>
          <Route exact path='/cannabis'>
            <Cannabis />
          </Route>
          <Route exact path='/services'>
            <Services />
          </Route>
          <Route exact path='/featured'>
            <Featured />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
