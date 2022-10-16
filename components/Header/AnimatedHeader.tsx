import React from 'react';
import { Header, Transition } from 'semantic-ui-react';

import { Avocado } from '@components/SVGIcons';

type AnimatedHeaderProps = {
    onClick: () => void;
    visible: boolean;
    onComplete: () => void;
}

const AnimatedHeader = ({ onClick, visible, onComplete }: AnimatedHeaderProps) => {
    return (
        <Header size='huge' as='h1' onClick={onClick}>
            Avo
            <Transition
                animation='jiggle'
                visible={visible}
                duration={900}
                onComplete={onComplete}
            >
                <div className='header'>
                    <Avocado size="58px" />
                </div>
            </Transition>
            Shop
            <style jsx>{
                `
                .header {
                    cursor: pointer;
                }
                `
            }</style>
        </Header>
    )
}

export default AnimatedHeader