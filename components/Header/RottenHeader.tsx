import React from 'react';
import { Header } from 'semantic-ui-react';
import { Die } from '@components/SVGIcons';

const RottenHeader = () => {
    return (
        <Header size='huge' as='h1'>
            Avo
            <Die size='58px' />
            Shop
        </Header>
    )
}

export default RottenHeader