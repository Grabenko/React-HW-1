import React from 'react';
import My from '../components/My';

const MyProps = (props) => {
    console.log(props);
    return (
        <div>
            My_props
            <My MyProps={props.MyProps}/>
        </div>
    );
}

export default MyProps;
