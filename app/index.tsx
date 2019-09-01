import 'sanitize.css';
import './styles/global';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ScrollRecorder from 'components/Shared/Scroll/ScrollRecorder';
import ScrollRestorer from 'components/Shared/Scroll/ScrollRestorer';
import App from './containers/App';

const history = createBrowserHistory();

const render = (Component: React.ComponentType<any>) => (
  ReactDOM.render(
    (
      <Router history={history}>
        <ScrollRecorder history={history}>
          <Component />
          <ScrollRestorer/>
        </ScrollRecorder>
      </Router>
    ),
    document.getElementById('root')
  )
);

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(require('./containers/App').default);
  });
}
