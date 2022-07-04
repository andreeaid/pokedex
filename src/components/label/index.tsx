import React, { ReactNode } from 'react';
import { Label as LabelItem } from './styles';

const Label: React.FC<{ text: string; color: string; htmlFor: string }> = ({ text, color, htmlFor }) => {
	return (
		<LabelItem htmlFor={htmlFor} $color={color}>
			{text?.toUpperCase()}
		</LabelItem>
	);
};

export default Label;
