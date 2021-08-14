import styled from '@emotion/styled';
import Logo from './Logo';

const Wrapper = styled.div`
    text-align:center;
    margin: 0 auto; 
    width: 80%;
`

const Cell = styled.div`
    position: relative;
    top: 50px;
    border: 2px solid #0088dd;
    border-radius: 10px;
    width: 47.5%;
    height: 240px;
    float: left;
    margin: 1%;
`

const Text = styled.p`
    color: #FFFF37; 
    text-align: center;
    font-size: 20px;
    font-family: "Arial", "LiHei Pro", sans-serif;
`

const Btn = styled.button`
    position: relative;
    top: 100px;
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
`

const HomePage = ({ handleSetHomePage, handleSetLoading }) => {
    const clicked = () => {
        handleSetHomePage(false)
        handleSetLoading(true)
    }
    
    return(
        <Wrapper>
            <Logo/>
            <Cell>
                <Text>FrontEnd</Text>
                <Text>JavaScript</Text>
                <Text>HTML</Text>
                <Text>CSS</Text>
                <Text>React</Text>
            </Cell>
            <Cell>
                <Text>BackEnd</Text>
                <Text>Python</Text>
                <Text>Flask</Text>
            </Cell>
            <Btn onClick={clicked}>Enter</Btn>
        </Wrapper>
    )
}

export default HomePage;