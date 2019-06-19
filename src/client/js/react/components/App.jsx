import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '_routes/appRoutes';
import './App.scss';
import HomePage from './HomePage';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log("Application has mounted on the browser!");
  }
  render() {
    return (
        <Switch>
          {routes.map((route, index) => (
            <Route key={`${route.path ? route.path : `404Page`}-${index}`} {...route} />
          ))}
        </Switch>
    );
  }
}

export default App;