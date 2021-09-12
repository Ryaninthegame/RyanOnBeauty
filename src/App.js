import React, { useState } from 'react'
import styled from '@emotion/styled';
import Container from './Container';
import HomePage from './view/HomePage';

const Canvas = styled.div`
	background-color: black;
	min-height: 100%;
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

const App = () => {
	const [homePage, setHomePage] = useState(true);
	const [loading, setLoading] = useState(false)

	const handleSetHomePage = (clicked) => {
		return setHomePage(clicked)
	}
	const handleSetLoading = (clicked) => {
		return setLoading(clicked)
	}

	const setTime = () => {
		postData('https://flask-ryan.herokuapp.com/foo');
	}

	setTimeout(setTime, 5000)

	return (
		<Canvas>
			{ homePage === true && (
				<HomePage 
					handleSetHomePage={handleSetHomePage}
					handleSetLoading={handleSetLoading}
				/>
			)}
			{ homePage === false && (
				<Container 
					loading={loading}
					handleSetLoading={handleSetLoading}
				/>
			)}
		</Canvas>
	)
}

export default App;