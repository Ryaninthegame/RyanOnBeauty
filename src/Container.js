import React, { useState, useEffect, useCallback } from 'react'
import styled from '@emotion/styled';
import ControlPanel from './view/ControlPanel';
import ArticlePanel from './view/ArticlePanel';
import ArticleContent from './view/ArticleContent';
import Loading from './view/Loading'
import Logo from './view/Logo';

const Wrapper = styled.div`
    margin: 0 auto; 
    width: 80%;
`

const postData = (url) => {
    const headers = new Headers();
    headers.append('user-agent', 'Example')
    headers.append('content-type', 'application/json')
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/RyanOnBeauty');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');

    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: headers,
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    })
}

const Container = ({ loading, handleSetLoading }) => {
    const [page, setPage] = useState("ArticlePanel")
    const [titleSet, setTitleSet] = useState([])
    const [content, setContent] = useState([])
    const [articleClicked, setArticleClicked] = useState("")

    const handleSetPage = (page) => {
        return setPage(page);
    }

    const handleSetArticleClicked = (articleClicked) => {
        return setArticleClicked(articleClicked);
    }

    const getDataYesterday = useCallback(() => {
        postData('https://flask-ryan.herokuapp.com/yesterday')
        .then((response) => response.json())
        .then((data) => {
            const results = data['content']
            const titleSet = Object.keys(results)
            // ! titleSet is memory address
            setTitleSet(titleSet)
            setContent(results)
            handleSetLoading(false)
        })
    }, [handleSetLoading])

    useEffect(() => {
        getDataYesterday()
    }, [getDataYesterday])
    
    return(
        <Wrapper>
            <Logo/>
            <br/>
            {loading === true && (
                <Loading/>
            )}
            {page === 'ArticlePanel' && (
                <ArticlePanel
                    titleSet={titleSet}
                    handleSetPage={handleSetPage}
                    handleSetArticleClicked={handleSetArticleClicked}
                />
            )}
            {page === 'ArticleContent' && (
                <ControlPanel 
                    handleSetPage={handleSetPage}
                />
            )}
            {page === 'ArticleContent' && (
                <ArticleContent
                    articleClicked={articleClicked}
                    content={content}
                />
            )}
        </Wrapper>
    )
}

export default Container;