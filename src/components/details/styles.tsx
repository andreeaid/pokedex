import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 800px;
	font-size: 50px;
	background-color: #2f8870;
	margin: 0;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	cursor: default;
	font-size: 12px;
	border-radius: 15px;
	border: 3px solid #7bc393;

	@media (max-width: 700px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding-bottom: 16px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0 8px;

	@media (max-width: 700px) {
		flex-direction: column;
		flex-wrap: initial;
		align-items: flex-start;
		justify-content: center;
	}
`;

export const LongRow = styled.div<{ $top: boolean }>`
	width: 100%;
	display: flex;
	flex-direction: row;
	border-radius: 12px;
	border: 2px solid #75b98b;
	position: relative;
	background-color: #eceeda;
	margin-top: ${({ $top }) => ($top ? '4px' : '0px')};
`;

export const infoCss = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const Info = styled.div`
	${infoCss}
`;

export const infoRowCss = css<{ $top: boolean }>`
	height: 100%;
	width: 100%;
	line-height: 22px;
	background-color: #97d8a0;
	border-bottom: none;
	color: ${({ $top }) => ($top ? 'white' : 'black')};
	text-shadow: ${({ $top }) => ($top ? '1px 1px rgba(0, 0, 0, 0.75)' : 'none')};
	font-weight: bold;
	padding: 8px 16px 5px;
	border-top-left-radius: ${({ $top }) => ($top ? '10px' : '0px')};
	border-top-right-radius: ${({ $top }) => ($top ? '10px' : '0px')};
	border-bottom-left-radius: ${({ $top }) => ($top ? '0px' : '10px')};
	border-bottom-right-radius: ${({ $top }) => ($top ? '0px' : '10px')};
	background-color: ${({ $top }) => ($top ? '#97d8a0' : 'transparent')};
	display: flex;
	justify-content: ${({ $top }) => ($top ? 'space-between' : 'flex-start')};
	flex-wrap: wrap;
	align-items: center;

	> div {
		display: flex;
		align-items: center;
		> img {
			width: 12px;
			margin-right: 6px;
			margin-bottom: 2px;
		}
	}

	> span {
		min-height: 24px;
		font-size: 7px;
		margin-right: 16px;
	}
`;

export const InfoRow = styled.div<{ $top: boolean }>`
	${infoRowCss}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	background-color: #6197d8;
	height: 12px;
	width: 40%;
	padding-left: 16px;
	box-shadow: inset -3px 0px 0px #4890b8, inset 3px 0px 0px #4890b8, inset -6px 0px 0px #3890a0,
		inset 6px 0px 0px #3890a0, inset -6px 0px 0px #209088, inset 6px 0px 0px #209088, inset -6px 0px 0px #0e9070,
		inset 6px 0px 0px #0e9070;
	margin-left: 12px;
	> span {
		color: white;
		text-shadow: 2px 2px rgba(112, 104, 96, 0.75);
		line-height: 10px;
		margin-top: 4px;
	}

	@media (max-width: 700px) {
		width: 90%;
	}
`;
