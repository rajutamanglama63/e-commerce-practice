import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './pages/HomePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import cartPage from './pages/cartPage';
import productPage from './pages/productPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route expact path="/cartitem" component={cartPage} />
          <Route expact path="/product/:id" component={productPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
