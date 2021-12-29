import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SigUpForm from './components/Auth/SignUpForm';
import Home from './views/Home/Home';
import SignUp from './views/Sigup/Sigup';


function App() {
  return (
    <div className="App">
          <Router>
            <Switch>
            <Route 
              path='/' exact component={Home}
            />
            <Route 
              path='/signup' 
              exact 
              component={SignUp}
            />


            </Switch>
          </Router>
    </div>
  );
}

export default App;
