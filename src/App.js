import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/HomeSection';
import Offers from './pages/OfferSection/index';
import form from './pages/forms/Form'
import Contacts from './pages/ContactsSection/Contacts'
import Cars from './pages/CarsSection/Cars'


function App() {
  return (
 
    <Router>
     <Navbar />
     <Switch>
     <Route path="/" exact component={Home} /> 
     <Route path="/offers" component={Offers} />
     <Route path="/contacts" component={Contacts} />
     <Route path="/signin" component={form} />
     <Route path="/models" component={Cars} />
     </Switch>
    </Router>
    
  );
}

export default App;
