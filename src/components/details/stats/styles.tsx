import styled, { css } from 'styled-components';
import { infoCss, infoRowCss } from '../styles';

export const Item = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	font-size: 9px;

	> p {
		text-align: center;
		width: 50%;
		color: white;
		text-shadow: 1px 1px rgba(0, 0, 0, 0.75);
		background-color: #ddf784;
		padding: 2px 0;
		font-weight: bold;

		@media (max-width: 700px) {
			width: 60%;
			font-size: 8px;
			text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
		}
	}

	> span {
		text-align: center;
		width: 50%;
		color: black;
		padding: 2px 0;

		@media (max-width: 700px) {
			width: 40%;
		}
	}
`;

export const Wrapper = styled.div`
	${infoCss}
	flex-direction: row;
`;

export const Row = styled.div<{ $top: boolean }>`
	${infoRowCss}
	width: 50%;
`;
