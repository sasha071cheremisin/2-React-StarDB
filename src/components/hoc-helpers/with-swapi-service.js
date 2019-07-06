import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapper) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const propsService = mapMethodsToProps(swapiService);
                        return (
                            <Wrapper {...props} {...propsService} />
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}

export default withSwapiService;
