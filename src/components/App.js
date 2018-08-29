import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {Home} from './home/Home';
import ModalContainer from '../containers/ModalContainer';
import NotFound from './notfound/NotFound';
import '../index.css';

const App = ({store}) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/modal" component={ModalContainer} />
        <Route path="/404" component={NotFound} />
        <Route path="*" render={() => (
          <Redirect to="/404"/>
        )}/>
      </Switch>
    </Router>
  </Provider>
);

export default App;

if (process.env.NODE_ENV !== 'production') {
  App.propTypes = {
    store: PropTypes.object.isRequired
  };
}
