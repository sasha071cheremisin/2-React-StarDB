import ItemDetails, { Record } from '../item-details';
import React from 'react';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="Model" label="model" />
            <Record field="Length" label="length" />
            <Record field="Cost" label="costInCredits" />
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
