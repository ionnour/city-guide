import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import {Switch, Route} from 'react-router-dom';

import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/details" component={Details} />
        <Route  component={NotFound} />

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
