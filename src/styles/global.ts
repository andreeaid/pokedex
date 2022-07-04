import styled, { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`${css`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-weight: normal;
		outline: 0;
		font-family: 'Pokemon';
	}
	html,
	body,
	#root {
		width: 100%;
		min-height: 100%;
		height: 100%;
		box-sizing: border-box;
		font-size: 16px;
		user-select: none;
	}
`}`;

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	font-size: 50px;
	background-color: #2f8870;
	margin: 0;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: default;
	padding-bottom: 64px;
`;
