import React, { Component } from 'react';
import AcBreadcrumbs from '../../utils/breadcrumbUtils';

class Breadcrumbs extends Component {
    render() {
        // define breadcrumbs
        const breadcrumbs = {};

        return (
            <div style={{ marginLeft: '-30px', marginTop: 5 }}>
                <AcBreadcrumbs breadcrumbs={breadcrumbs} defaultLink="/" home="Home" />
            </div>
        );
    }
}

export default Breadcrumbs;
