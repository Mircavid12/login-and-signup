import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from './components/dashboard';
import CardList from './components/cardList';

import SubscriptionList from './components/subscriptionList';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Sidebar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/" component={Signup} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/cards" component={CardList} />
          <Route path="/subscriptions" component={SubscriptionList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
