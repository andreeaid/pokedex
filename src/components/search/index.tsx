import React, { useState, useEffect } from 'react';
import { usePokedex } from '../../utils/hooks/usePokedex';
import chevron from '../../assets/chevron.svg';
import { Container, Input, InputContainer, Wrapper, Filter } from './styles';
import Dropdown from '../dropdown';
import List from '../list';

const Search: React.FC = () => {
	const [showTypes, setShowTypes] = useState<boolean>(false);
	const [allTypes, setTypes] = useState<Array<Types>>([]);

	const { name, type, getTypes, filteredItems, setType, setName } = usePokedex();

	useEffect(() => {
		setShowTypes(localStorage.getItem('showTypes') === 'true');
		setTypes(getTypes());
	}, []);

	return (
		<Container>
			<Wrapper>
				<InputContainer>
					<Input
						id="search"
						aria-label={'search'}
						name={'search'}
						autoComplete="off"
						autoCorrect="off"
						autoCapitalize="off"
						disabled={false}
						type="text"
						placeholder="Enter name..."
						value={name!}
						onChange={(e) => setName(e.target.value)}
					/>
					{(name || type) && (
						<span
							onClick={() => {
								setName('');
								setType('');
							}}>
							CLEAR
						</span>
					)}
				</InputContainer>
				<Filter
					onClick={() => {
						localStorage.setItem('showTypes', String(!showTypes));
						setShowTypes(!showTypes);
					}}
					$expanded={showTypes}>
					FILTER <img src={chevron} alt="Chevron" />
				</Filter>
			</Wrapper>
			{showTypes && <Dropdown type={type} setType={setType} allTypes={allTypes!} />}
			<List items={filteredItems} />
		</Container>
	);
};

export type Types = {
	name: string;
	color: string;
};

export default Search;
