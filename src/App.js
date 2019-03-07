import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Product from './components/product/Product';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/not-found/NotFound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/not-found" component={NotFound} />
              <Route exact path="/product/:id" name="Product Page" component={Product} />
              <Route path="/" name="Main Page" component={Landing} />
            </Switch>
            <Footer />
          </div>
        </HashRouter>

      </Provider>

    );
  }
}

export default App;
