import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route path='/categories/:idc' component={Details} />
      <Route path='/cart' component={Cart} />
    </Router>
  );
}

export default App;
