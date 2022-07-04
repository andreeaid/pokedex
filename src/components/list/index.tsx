import React, { useMemo } from 'react';
import { usePokedex } from '../../utils/hooks/usePokedex';
import pokeball from '../../assets/pokeball.svg';
import { InfoRow, Container, Thumbnail, Row, Wrapper } from './styles';
import Label from '../label';
import { NameType } from '../details/profile';

const List: React.FC<{ items: Array<Item> }> = ({ items }) => {
	const { getTypeColor } = usePokedex();

	const list = useMemo(() => {
		return !!items.length ? (
			<Container>
				{items.map(({ name, id, image, type }) => (
					<Row to={`/details/${name.english}`} key={id}>
						<Thumbnail src={image?.sprite} />
						<Wrapper>
							<InfoRow $top>
								<div>
									<img src={pokeball} alt="Pokeball" /> {name.english.toUpperCase()}
								</div>
								<span>{name.japanese.toUpperCase()}</span>
							</InfoRow>
							<InfoRow $top={false}>
								<div>
									TYPE/
									{type.map((item) => (
										<Label key={item} text={item} color={getTypeColor(item)!} htmlFor="" />
									))}
								</div>
							</InfoRow>
						</Wrapper>
					</Row>
				))}
			</Container>
		) : null;
	}, [items]);

	return list;
};

type Item = {
	name: NameType;
	id: number;
	image: Image;
	type: Array<string>;
};

type Image = {
	sprite: string;
};

export default List;
