import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route path='/categories/:idc' component={Details} />
    </Router>
  );
}

export default App;
