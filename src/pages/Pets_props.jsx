import React from 'react';
import Pets from '../components/Pets';

const PetsProps = (props) => {
    return (
        <div>
            My Pets
            <Pets PetsProps={props.PetsProps}/>
        </div>
    );
}

export default PetsProps;
