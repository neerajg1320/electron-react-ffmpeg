import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './reducers';

import VideoSelectScreen from './screens/VideoSelectScreen';
import ConvertScreen from './screens/ConvertScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/convert" component={ConvertScreen} />
            <Route path="/" component={VideoSelectScreen} />
          </Routes>
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
);

