import ItemDetails, { Record } from '../item-details';
import React from 'react';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="Gender" label="gender" />
            <Record field="Birth year" label="birthYear" />
            <Record field="Eye color" label="eyeColor" />
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
