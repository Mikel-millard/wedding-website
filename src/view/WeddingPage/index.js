import React from 'react';
import {withAuthorization} from '../../components/Session';

const WeddingPage = () => {
    return (
        <p>Wedding Page</p>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(WeddingPage);