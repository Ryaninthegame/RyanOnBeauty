import React from 'react'
import styled from '@emotion/styled';

const Wrapper = styled.div`
    margin: 0 auto; 
    width: 100%;
`

const Panel = styled.div`
    background-color: #000000;
    padding: 10px;
    width: 80%;
    height: 30px;
    margin: 0 auto;
    margin-top: 20px;
`

const Btn = styled.button`
    // position: fixed;
    margin-left: 10px;
    width: 100px;
    font-size: 20px;
    font-family: "Arial", "LiHei Pro", sans-serif;
    text-align: center;
    font-weight: bold;
    border: 2px #0088dd solid;
    border-radius: 10px;
    color: #FFFF37; 
    background-color: ${({ state, btn }) => {
        if(state==='Daily' && btn==='daily'){
            return '#0088dd'
        }
        else
            return '#000000'
    }};
    
    &:hover {
        background-color: #0088dd;
    }
`

const Menu = ({ state }) => {
    return(
        <Wrapper>
            <Panel>
                <Btn state={state} btn={'daily'}>Daily</Btn>
                <Btn state={state} btn={"weekly"}>Weekly</Btn>
            </Panel>
        </Wrapper>
    )
}

export default Menu