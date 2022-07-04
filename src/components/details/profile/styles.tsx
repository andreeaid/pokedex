import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 50%;
	background-color: #97d8a0;
	padding: 16px 12px;
	border-top-left-radius: 11px;
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	border-bottom-left-radius: 11px;
	border: 2px solid #75b98b;

	@media (max-width: 700px) {
		width: 100%;
		border-bottom-right-radius: 0px;
		border-bottom-right-radius: 0px;
	}
`;

export const Thumbnail = styled.img`
	width: 100%;
	padding: 32px;
	background-color: #eceeda;
	background: repeating-linear-gradient(to bottom, #d8e0f0, #f7faff 2px, #d8e0f0 4px, #eceeda 8px);
	border-radius: 4px;
	object-fit: contain;

	@media (max-width: 700px) {
		height: 200px;
		width: 100%;
		border-bottom-right-radius: 0px;
	}
`;

export const Identifier = styled.div`
	display: flex;
	align-items: center;
	color: white;
	text-shadow: 1px 1px rgba(0, 0, 0, 0.75);
	font-size: 16px;
	margin-bottom: 8px;

	> img {
		margin-right: 6px;
		width: 16px;
		margin-bottom: 4px;
	}

	> span {
		font-size: 10px;
		line-height: -10px;
		padding-right: 4px;
		margin-top: 2px;
	}
`;

export const Name = styled.div`
	color: white;
	text-shadow: 1px 1px rgba(0, 0, 0, 0.75);
	font-size: 16px;
	margin-top: 16px;
	display: flex;
	flex-direction: column;

	@media (max-width: 700px) {
		flex-direction: row;
		align-items: center;
		margin: 32px 0 8px;
		line-height: 0px;
	}
`;
