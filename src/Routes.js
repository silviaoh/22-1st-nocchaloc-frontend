import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Tealist from './pages/Main/Tealist/Tealist';
import Detail from './pages/Main/Tealist/Detail/Detail';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tealist" component={Tealist} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
