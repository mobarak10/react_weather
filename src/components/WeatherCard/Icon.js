import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {
    const Icon = styled.img`
        width: 10%;
    `
    return ( 
        <Icon 
            src="./img/cloudy_icon.png" 
            alt="Weather Card"
        />
     );
}
 
export default Icon;