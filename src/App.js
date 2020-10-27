import './App.css';
import {Switch , Route} from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
    </>
  );
}

export default App;
