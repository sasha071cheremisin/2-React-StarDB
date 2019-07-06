import ItemDetails, { Record } from '../item-details';
import React from 'react';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="Population" label="population" />
            <Record field="Rotation period" label="rotationPeriod" />
            <Record field="Diameter" label="diameter" />
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
