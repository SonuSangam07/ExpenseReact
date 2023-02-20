
import './App.css';
import Signup from './components/SignUp';
import Login from './components/login';
import { Route,Switch } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Switch>
     <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path='/'>
      <Signup/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
