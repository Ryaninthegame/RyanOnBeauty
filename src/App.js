import React, { useState } from 'react'
import styled from '@emotion/styled';
import Container from './Container';
import HomePage from './view/HomePage';

const Canvas = styled.div`
	background-color: black;
	min-height: 100%;
`
const App = () => {
	const [homePage, setHomePage] = useState(true);
	const [loading, setLoading] = useState(false)
	const handleSetHomePage = (clicked) => {
		return setHomePage(clicked)
	}
	const handleSetLoading = (clicked) => {
		return setLoading(clicked)
	}
	
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