import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.scss';

export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 5000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    }

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        const { updateInterval } = this.props;

        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    }

    onError = (err) => {
        console.error(err);
        this.setState({
            error: true,
            loading: false
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {

        const { planet, loading, error } = this.state;

        const loadingData = (!loading && !error);
        const spinner = loading ? <Spinner /> : null;
        const planetView = loadingData ? <PlanetView planet={planet} /> : null;
        const errorIndicator = error ? <ErrorIndicator /> : null;

        return (
            <div className="random-planet">
                {errorIndicator}
                {spinner}
                {planetView}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className="random-planet__image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
            <div className="random-planet__info">
                <div className="random-planet__info-title">
                    {name}
                </div>
                <div className="random-planet__info-list list-group list-group-flush">
                    <div className="random-planet__info-item list-group-item">
                        Population: {population}
                    </div>
                    <div className="random-planet__info-item list-group-item">
                        Rotation period: {rotationPeriod}
                    </div>
                    <div className="random-planet__info-item list-group-item">
                        Diameter: {diameter}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
