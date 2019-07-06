import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonList, PersonDetails } from '../sw-components';
import Row from '../row';

const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    return (
        <Row
            left={<PersonList itemSelection={(id) => history.push(id)} />}
            right={<PersonDetails itemId={id} />} />
    );
};

export default withRouter(PeoplePage);
