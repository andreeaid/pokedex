import styled from 'styled-components';
import { infoCss, infoRowCss } from '../styles';

export const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

export const Row = styled.div<{ $top: boolean; $long: boolean }>`
	width: calc(50% - 2px);
	display: flex;
	flex-direction: row;
	border-radius: 12px;
	border: 2px solid #75b98b;
	position: relative;
	background-color: #eceeda;
	margin-top: ${({ $top }) => ($top ? '4px' : '0px')};
	width: ${({ $long }) => ($long ? '100%' : 'calc(50% - 2px)')};

	@media (max-width: 700px) {
		margin-top: ${({ $top }) => ($top ? '8px' : '0px')};
	}
`;

export const Info = styled.div`
	${infoCss}
`;

export const InfoRow = styled.div<{ $top: boolean }>`
	${infoRowCss}
`;
