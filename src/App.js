import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Employees from './Components/Employees'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      
      <Router>
       
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/employee' exact component={Employees} />
          
          
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
