import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            error: false
        }

        componentDidMount() {
            this.props.getData()
                .then(this.onDataLoaded)
                .catch(this.onError);
        }

        onError = (err) => {
            console.error(err);
            this.setState({
                error: true,
            });
        }

        onDataLoaded = (data) => {
            this.setState({ data });
        }

        render() {
            const { data, error } = this.state;

            if (!data && !error) return <Spinner />;
            if (error) return <ErrorIndicator />;

            return (
                <View {...this.props} data={data} />
            );
        }
    };
};

export default withData;
