import { useState, useMemo, useEffect } from 'react';
import { PokedexClient } from '../../client/client';

const Pokedex = new PokedexClient();

export function usePokedex() {
	const [name, setName] = useState<string>('');
	const [type, setType] = useState<string>('');
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		const initialName = localStorage.getItem('name');
		const initialType = localStorage.getItem('type');
		if (initialName) setName(initialName!);
		if (initialType) setType(initialType!);
		setMounted(true);
	}, []);

	const filteredItems = useMemo(() => {
		if (mounted) {
			localStorage.setItem('name', name!);
			localStorage.setItem('type', type!);
		}
		return Pokedex.listPokemon({ name: name!, type: type! });
	}, [mounted, name, type]);

	const getTypes = () => {
		return Pokedex.listTypes();
	};

	const getTypeColor = (type: string) => {
		return Pokedex.getTypeColor(type!);
	};

	const getPokemonDetails = (name: string) => {
		return Pokedex.getPokemonByName(name!);
	};

	return {
		name,
		type,
		filteredItems,
		setName,
		setType,
		getTypeColor,
		getTypes,
		getPokemonDetails,
	};
}
