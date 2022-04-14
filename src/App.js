import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Success from './pages/Success';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/categories/:idc' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/success' component={Success} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
