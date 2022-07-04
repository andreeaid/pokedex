import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	margin-top: 16px;
	width: 100%;
`;

export const Row = styled(Link)`
	width: calc(25% - 12px);
	display: flex;
	flex-direction: row;
	border-radius: 12px;
	border: 2px solid #75b98b;
	margin: 8px 0;
	position: relative;
	background-color: #eceeda;
	text-decoration: none;
	margin-right: 12px;
	display: flex;
	justify-content: flex-end;

	&:hover {
		transition: 250ms;
		transform: translateY(-3px);
	}

	@media (max-width: 1350px) {
		width: calc(33.3% - 12px);
	}

	@media (max-width: 1000px) {
		width: calc(50% - 12px);
	}

	@media (max-width: 700px) {
		margin: 4px 0;
		width: 100%;

		&:hover {
			transform: translateY(0px);
		}
	}

	@media (max-width: 500px) {
		margin-right: 0px;
	}
`;

export const Thumbnail = styled.img`
	width: 72px;
	height: 72px;
	padding: 8px;
	background-color: #eceeda;
	background: repeating-linear-gradient(to bottom, #d8e0f0, #f7faff 1px, #d8e0f0 2px, #eceeda 4px);
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	border-right: 2px solid #75b98b;
	object-fit: contain;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	width: calc(100% - 72px);

	@media (max-width: 1350px) {
		width: calc(100% - 64px);
	}
`;

export const InfoRow = styled.div<{ $top: boolean }>`
	height: 100%;
	width: 100%;
	font-size: ${({ $top }) => ($top ? '10px' : '8px')};
	line-height: 22px;
	background-color: #97d8a0;
	border-bottom: none;
	color: ${({ $top }) => ($top ? 'white' : 'black')};
	text-shadow: ${({ $top }) => ($top ? '1px 1px rgba(0, 0, 0, 0.75)' : 'none')};
	font-weight: bold;
	padding: 8px 16px 5px;
	border-top-right-radius: ${({ $top }) => ($top ? '10px' : '0px')};
	border-bottom-right-radius: ${({ $top }) => ($top ? '0px' : '10px')};
	background-color: ${({ $top }) => ($top ? '#97d8a0' : 'transparent')};
	display: flex;
	justify-content: space-between;

	> div {
		display: flex;
		align-items: center;

		> img {
			width: 12px;
			margin-right: 6px;
			margin-bottom: 2px;
		}
	}
`;
