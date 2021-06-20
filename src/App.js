import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';
import Detail_Portfolio from './components/pages/Portfolio';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/portfolio' exact component={Portfolio} />
          <Route path='/contact' exact component={ContactUs} />
          <Route path='/job' exact component={Jobs} />
          <Route path='/portfolio-detail' component={Detail_Portfolio} /> 
        </Switch>
      </Router>
  );
}

export default App;