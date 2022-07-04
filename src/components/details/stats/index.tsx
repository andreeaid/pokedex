import React from 'react';
import { Item, Row, Wrapper } from './styles';
import { Title, LongRow } from '../styles';

const Stats: React.FC<{ base: Base }> = ({ base }) => {
	const { HP, Attack, Defense, 'Sp. Attack': SpAttack, 'Sp. Defense': SpDefence, Speed } = base;
	return (
		<>
			<Title>
				<span>BASE STATS</span>
			</Title>
			<LongRow $top={false}>
				<Wrapper>
					<Row $top={false} style={{ padding: 0 }}>
						<Item>
							<p style={{ borderTopLeftRadius: '12px' }}>HP</p>{' '}
							<span>
								{HP}/{HP}
							</span>
						</Item>
						<Item>
							<p>ATTACK</p> <span>{Attack}</span>
						</Item>
						<Item>
							<p style={{ borderBottomLeftRadius: '12px' }}>DEFENSE</p> <span>{Defense}</span>
						</Item>
					</Row>
					<Row $top={false} style={{ padding: 0 }}>
						<Item>
							<p>SP. ATTACK </p>
							<span>{SpAttack}</span>
						</Item>
						<Item>
							<p>SP. DEFENSE </p>
							<span>{SpDefence}</span>
						</Item>
						<Item>
							<p>SPEED</p>
							<span>{Speed}</span>
						</Item>
					</Row>
				</Wrapper>
			</LongRow>
		</>
	);
};

type Base = {
	HP: number;
	Attack: number;
	Defense: number;
	'Sp. Attack': number;
	'Sp. Defense': number;
	Speed: number;
};

export default Stats;
