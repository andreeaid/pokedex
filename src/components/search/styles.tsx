import styled from 'styled-components';

export const Container = styled.div`
	width: calc(100% - 64px);
	font-size: 50px;
	background-color: #97d8a0;
	margin: 0;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	cursor: default;
	font-size: 12px;
	border-radius: 15px;
	border: 3px solid #7bc393;
	padding: 32px 20px 32px 32px;
	margin: 0 32px;

	@media (max-width: 500px) {
		padding: 16px;
		width: calc(100% - 16px);
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 72px;
	border-radius: 12px;
	border: 2px solid #c28852;
	font-size: 8px;
	line-height: 18px;
	background-color: #f8f8d0;
	position: relative;
	padding-top: 32px;
	padding-left: 16px;
	margin-top: 2px;

	&::placeholder {
		font-size: 8px;
		line-height: 18px;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	width: calc(90% - 16px);
	position: relative;

	&:after {
		width: calc(100% - 36px);
		content: 'SEARCH BY NAME';
		border-top-right-radius: 12px;
		border-top-left-radius: 12px;
		top: 0;
		left: 0;
		position: absolute;
		font-size: 10px;
		line-height: 21px;
		background-color: #e2ad71;
		border: 2px solid #c28852;
		border-bottom: none;
		color: white;
		text-shadow: 1px 1px rgba(0, 0, 0, 0.75);
		font-weight: bold;
		padding: 8px 16px 5px;
	}

	> span {
		position: absolute;
		top: 50px;
		right: 16px;
		font-size: 8px;
		cursor: pointer;
		color: #c28852;
	}

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 700px) {
		justify-content: center;
		flex-direction: column;
	}
`;

export const Filter = styled.div<{ $expanded: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10%;
	font-size: 10px;
	font-weight: bold;
	color: #2f8870;
	cursor: pointer;

	> img {
		fill: #2f8870;
		width: 8px;
		margin-left: 4px;
		margin-bottom: 2px;
		transform: ${({ $expanded }) => `rotate(${$expanded ? '0deg' : '180deg'})`};
	}

	@media (max-width: 700px) {
		font-size: 9px;
		width: 100%;
		justify-content: flex-start;
		margin-left: 16px;
		margin-top: 24px;
	}
`;
