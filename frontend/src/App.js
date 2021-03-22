import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import {
  BrowseRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App(req,res) {
  return (
    
    <div className="App">
      <Login/>
    </div>

  );
}

export default App;
