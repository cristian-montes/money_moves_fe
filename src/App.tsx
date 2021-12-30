import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SigUpForm from './components/Auth/SignUpForm';
import Home from './views/Home/Home';
import SingIn from './views/Signin/Signin';
import SignUp from './views/Sigup/Sigup';
import Transaction from './views/Transaction/Transaction';


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
            <Route 
              path='/signin' 
              exact 
              component={SingIn}
            />
             <Route 
              path='/transaction' 
              exact 
              component={Transaction}
            />
            

            </Switch>
          </Router>
    </div>
  );
}

export default App;
