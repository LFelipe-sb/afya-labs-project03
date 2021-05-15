import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Index';
import Contact from './views/pages/Contact/Index';
import Home from './views/pages/Home/Index';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;