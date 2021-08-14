import React from 'react'
import styled from '@emotion/styled';

const Wrapper = styled.div`
    margin: 0 auto; 
    width: 100%;
`;

const Menu = styled.div`
    background-color: #000000;
    padding: 10px;
    width: 100%;
    height: 30px;
`;

const Btn = styled.button`
    // position: fixed;
    width: 100px;
    font-size: 20px;
    font-family: "Arial", "LiHei Pro", sans-serif;
    text-align: center;
    font-weight: bold;
    border: 2px #0088dd solid;
    border-radius: 10px;
    color: #FFFF37; 
    background-color: #000000;
    &:hover{
        background-color: #0088dd;
    }
`;

const ControlPanel = ({ handleSetPage }) => {
    const previous = () => {
        return handleSetPage("ArticlePanel");
    }
    
    return(
        <Wrapper>
            <Menu>
                <Btn onClick={previous}>Previous</Btn>
            </Menu>
        </Wrapper>
    )
}

export default ControlPanel;