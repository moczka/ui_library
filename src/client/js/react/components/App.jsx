import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '_routes/appRoutes';
import Page from '_components/Page/Page';
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log("Application has mounted on the browser!");
  }
  render() {
    return (
      <Page>
        <Switch>
          {routes.map((route, index) => (
            <Route key={`${route.path ? route.path : `404Page`}-${index}`} {...route} />
          ))}
        </Switch>
      </Page>
    );
  }
}

export default App;