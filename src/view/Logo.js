import React from 'react'
import styled from '@emotion/styled';

const Wrapper = styled.div`
    margin: 0 auto; 
    width: 100%;
`;

const Title = styled.div`
    display: flex;
    width: 50%;
    position: relative;
    top: 30px;
    margin: 0 auto;
    padding: 10px;
    font-size: 50px;
    font-weight: bold; 
    justify-content: center;
    color: #FFFF37;
    
`
// ! Change CSS through prop
// color: ${({loading}) => {
//     if(loading){
//         return "#FFFF37"
//     }
//     else{
//         return "#1FFF37"
//     }
// }};
const Subtitle = styled.div`
    display: flex;
    position: relative;
    top: 20px;
    color: #0088dd; 
    justify-content: center;
    font-size: 15px;
    font-family: "Arial", "LiHei Pro", sans-serif;
`

const Logo = () => {
    return(
        <Wrapper>
            <Title>RyanOnBeauty</Title> 
            <Subtitle>Return Hottest Beauty Yesterday</Subtitle>
        </Wrapper>
    )
}

export default Logo;