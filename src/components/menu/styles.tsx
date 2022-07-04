import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background-color: #fef4ff;
	margin-bottom: 32px;
	position: relative;

	> a {
		color: white;
		font-weight: bold;
		text-decoration: none;
		font-size: 18px;

		> img {
			fill: black;
			width: 24px;
			height: 24px;
			margin-right: 16px;
		}

		@media (max-width: 700px) {
			font-size: 16px;
		}
	}

	@media (max-width: 500px) {
		margin-bottom: 16px;
	}
`;

export const Title = styled(Link)`
	display: flex;
	align-items: center;
	padding-left: 24px;
	padding-top: 2px;
	height: 62px;
	text-shadow: 1px 1px rgba(0, 0, 0, 0.75);
	background-color: #c05bdf;
	width: 30%;
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2);
	position: relative;
	z-index: 90;
	color: white;

	@media (max-width: 700px) {
		width: 55%;
	}
`;

export const MenuSelection = styled.div`
	display: flex;
	align-items: center;
	padding-left: 24px;
	padding-top: 2px;
	height: 62px;
	text-shadow: 1px 1px rgba(0, 0, 0, 0.75);
	background-color: #dd8afe;
	width: 30%;
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2);
	position: absolute;
	left: 15%;
	z-index: 80;

	@media (max-width: 1000px) {
		width: 40%;
		left: 20%;
	}

	@media (max-width: 700px) {
		width: 50%;
		left: 35%;
		padding-left: 16px;
	}
`;

export const Dot = styled.div<{ $dark: boolean }>`
	position: absolute;
	height: 24px;
	width: 24px;
	background-color: ${({ $dark }) => ($dark ? '#8c05ae' : 'white')};
	border-radius: 50px;
	box-shadow: inset 0 -2px 0px rgba(0, 0, 0, 0.2);
	right: 24px;
`;
