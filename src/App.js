import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import innClient from '@opplysningen1881/inn-js';
import promise from 'redux-promise';
import React from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ReceiptPageContainer from './containers/ReceiptPageContainer';
import reducers from './reducers';
import WebshopPageContainer from './containers/WebshopPageContainer';

const SITE = process.env.REACT_APP_SITE;

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(promise))
);

innClient.init({
  appName: /localhost/.test(window.location.origin)
    ? 'inn-js-locally'
    : `INN-Webshop-Demo${SITE === 'site2' ? '-2' : ''}`,
  mode: 'development'
});

const App = () => (
  <div className={['App', SITE].join(' ')}>
    <Provider store={store}>
      <div>
        <Header />
        <main className="container">
          <section className="pt-3">
            <BrowserRouter>
              <Switch>
                <Route path="/receipt" component={ReceiptPageContainer} />
                <Route path="/" component={WebshopPageContainer} />
              </Switch>
            </BrowserRouter>
          </section>
        </main>
        <Footer />
      </div>
    </Provider>
  </div>
);

export default App;
