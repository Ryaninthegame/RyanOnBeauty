import React, { useMemo } from 'react'
import styled from '@emotion/styled';
// import { keyframes } from 'styled-components'

const Wrapper = styled.div`
    // text-align:center;
    margin: 0 auto; 
    width: 100%;
`;

const Content = styled.div`
    background-color: #000000;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;
    width: 100%;
    min-height: 100%;
    text-align:center;
`

const Title = styled.div`
    display: flex;
    background-color: #0088dd;
    color: #FFFF37; 
    justify-content: center;
    width: 100%;
    font-size: 30px;
    line-height: 1.5em;
    padding-left: 20px;
    font-weight: bold;
`

const Image = styled.img`
    padding-top: 10px;
    width: 51%;
    height: 51%;
`

const Top = styled.button`
    position: relative;
    width: 100px;
    font-size: 20px;
    font-family: "Arial", "LiHei Pro", sans-serif;
    font-weight: bold;
    border: 2px #0088dd solid;
    border-radius: 10px;
    color: #FFFF37; 
    background-color: #000000;
    &:hover{
        background-color: #0088dd;
    }
`
// const currentLocation = useMemo(() => findLocation(currentCity), [currentCity]);
const ArticleContent = ({ articleClicked, content }) => {
    const top = () => {
        window.scrollTo(0, 0)
    }
    const imageSet = useMemo(() => {
        return content[articleClicked]
    }, [content, articleClicked])

    return(
        <Wrapper>
            <Title>{articleClicked}</Title>
            <Content>
                {imageSet.map((image) => (
                    <Image 
                        key={image}
                        src={image}
                    />
                ))}
            </Content>
            <Top onClick={top}>
                Top
            </Top>
        </Wrapper>
    )
}

export default ArticleContent;