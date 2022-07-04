import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	padding: 8px 0;
	font-size: 12px;
	margin-top: 16px;
	width: 90%;

	@media (max-width: 1000px) {
		width: 100%;
	}

	@media (max-width: 00px) {
		margin-top: 0px;
	}
`;

export const CheckBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-right: 8px;
	padding: 4px;
	margin-bottom: 8px;

	> input {
		margin-right: 4px;
	}

	@media (max-width: 400px) {
		width: 30%;
		height: 45px;
	}
`;
