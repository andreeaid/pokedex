import pokedata from './data/pokemon.json';
import types from './data/types.json';

export type Pokemon = typeof pokedata[number];
export type Type = typeof types[number];

/**
 * To initialize: const Pokedex = new PokedexClient()
 *
 * const pokemon = PokedexClient.listPokemon()
 * const charizard = PokedexClient.getPokemonByName('charizard')
 * const charizard = PokedexClient.getTypeColor('Electric')
 */

export class PokedexClient {
	private pokedex: Map<string, Pokemon> = new Map();
	private typesMap: Map<string, Type> = new Map();
	constructor() {
		pokedata.forEach((pokemon) => this.pokedex.set(pokemon.name.english, pokemon));
		types.forEach((type) => this.typesMap.set(type.name, type));
	}

	/**
	 * Returns a list of pokemon filtered by name and or type
	 */
	listPokemon({ name, type }: { name?: string; type?: string }) {
		return Array.from(this.pokedex.values()).filter((pokemon: Pokemon) => {
			const englishName = pokemon.name.english.toLowerCase();
			const withName = englishName.substring(0, name?.length!) === name?.toLowerCase()!;
			const withType = pokemon.type?.includes(type!);
			if (type && !name) return withType;
			else if (name && !type) return withName;

			return (name ? withName : false) && (type ? withType : true);
		});
	}

	/**
	 * Returns a single pokemon selected by exact name match
	 */
	getPokemonByName(name: string) {
		return Array.from(this.pokedex.values()).filter(
			(pokemon: Pokemon) => pokemon.name.english?.toLowerCase() === name?.toLowerCase()!
		)[0];
	}

	listTypes() {
		return Array.from(this.typesMap.values());
	}

	/**
	 * Returns hex color value of pokemon type
	 */
	getTypeColor(typeName: string) {
		return Array.from(this.typesMap.values()).find((item) => item.name?.toLowerCase() === typeName?.toLowerCase())
			?.color;
	}
}
