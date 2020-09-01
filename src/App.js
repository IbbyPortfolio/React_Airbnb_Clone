import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
   return (
      <div className='app'>
         <BrowserRouter>
            <Header />
            <Switch>
               <Route path='/search'>
                  <SearchPage />
               </Route>
               <Route path='/'>
                  <Home />
               </Route>
            </Switch>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
