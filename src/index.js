import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './resources/views/App';
import Editor from './resources/views/Editor/Editor';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/editor" component={Editor} />
        <Route>404</Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

