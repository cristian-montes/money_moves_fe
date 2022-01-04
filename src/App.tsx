import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SigUpForm from './components/Auth/SignUpForm';
import Header from './components/Header/Header'
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import SignIn from './views/Signin/Signin';
import SignUp from './views/Signup/Signup';
import Transaction from './views/Transaction/Transaction';


function App() {
  return (
    <div className="App">
      <Header/>
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
              component={SignIn}
            />
             <Route 
              path='/transaction' 
              exact 
              component={Transaction}
            />
            <Route 
              path='/profile' 
              exact 
              component={Profile}
            />
            

            </Switch>
          </Router>
    </div>
  );
}

export default App;
