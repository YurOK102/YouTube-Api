import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import TitlePage from './TitlePage/TitlePage';

import 'antd/dist/antd.css';

export class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={TitlePage} />
        </Switch>
      </>
    );
  }
}

export default App;
