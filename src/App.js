
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Data from './data/Data';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Stock from './pages/stock';




function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>

        <Route path="/about">
        <About/>
        </Route>

        <Route path="/stocks/:symbol"
        render={
        (routerProps) => 
        <Stock data={Data} {...routerProps}/>
      }
        />

        <Route path="/stocks">
        <Dashboard/>
        </Route>

        <Route exact path="/">
        <Home/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
