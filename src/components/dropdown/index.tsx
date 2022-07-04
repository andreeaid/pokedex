import React from 'react';
import { CheckBox, Container } from './styles';
import Label from '../label';
import { Types } from '../search';

const Dropdown: React.FC<{ type: string; setType: Function; allTypes: Array<Types> }> = ({
	type,
	setType,
	allTypes,
}) => {
	return (
		<Container>
			{allTypes.map(({ name, color }) => {
				return (
					<CheckBox key={name}>
						<input
							type="checkbox"
							id={name}
							name="types"
							value={name}
							checked={type === name}
							onChange={(e) => {
								if (type === name) setType('');
								else setType(e.target.value);
							}}
						/>
						<Label htmlFor={name} text={name} color={color} />
					</CheckBox>
				);
			})}
		</Container>
	);
};

export default Dropdown;
