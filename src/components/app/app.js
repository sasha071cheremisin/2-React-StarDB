import React, { Component } from 'react';

import './app.scss';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';


export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="app">
        <SwapiServiceProvider value={this.swapiService}>
          <Router>

            <Header />
            <RandomPlanet />

            <Switch>
              <Route path="/2-React-StarDB/"
                render={() => <h2>Welcome to StarDB</h2>}
                exact />
              <Route path="/2-React-StarDB/people/:id?" component={PeoplePage} />
              <Route path="/2-React-StarDB/planets/:id?" component={PlanetsPage} />
              <Route path="/2-React-StarDB/starships/" exact component={StarshipsPage} />
              <Route path="/2-React-StarDB/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />
                }} />
              <Route render={() => <h2>Page not found!</h2>} />
            </Switch>

          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}
