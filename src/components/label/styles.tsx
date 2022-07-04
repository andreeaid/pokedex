import styled from 'styled-components';

export const Label = styled.label<{ $color: string }>`
	font-size: 6px;
	margin-top: 4px 8px 4px 0;
	background-color: ${({ $color }) => $color || 'transparent'};
	color: white;
	text-shadow: 1px 1px rgba(0, 0, 0, 0.75);
	border-radius: 4px;
	box-shadow: inset 0 -1px 0px rgba(0, 0, 0, 0.2), inset 0 1px 0px rgba(255, 255, 255, 0.2);
	font-weight: bold;
	height: 16px;
	line-height: 16px;
	padding: 0 4px;
	margin-right: 4px;
	position: relative;

	@media (max-width: 700px) {
		line-height: 18px;
	}
`;
