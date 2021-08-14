import React from 'react'
import styled from '@emotion/styled';

const Wrapper = styled.div`
    text-align: center;
    margin: 0 auto; 
    width: 100%;
`;

const ArticleSet = styled.div`
    background-color: #000000;
    width: 100%;
    padding-top: 20px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
`;

const Article = styled.button`
    margin: 0 auto;
    margin-top: 0.5em;
    background-color: #000000;
    color: #FFFF37; 
    border: 2px #0088dd solid;
    border-radius: 10px;
    width: 80%;
    height: 50px;
    font-size: 25px;
    padding: 10px;
    padding-left: 30px;
    line-height: 1em;
    text-align: left;
    &:hover{
        background-color: #0088dd;
    }
`;

const ArticlePanel = ({ handleSetPage, handleSetArticleClicked, titleSet }) => {
    const enter = (article) => {
        handleSetPage("ArticleContent")
        handleSetArticleClicked(article)
    }
    
    return(
        <Wrapper>
            <ArticleSet>
                {titleSet.map((item) => (
                    <Article 
                        key={item} 
                        onClick={(item) => enter(item.target.innerHTML)}
                    >
                        {item}
                    </Article>
                ))}
            </ArticleSet>
        </Wrapper>
    )
}

export default ArticlePanel;