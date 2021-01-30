import _ from "lodash";
import Promise from "bluebird";
import Pokedex from "pokedex-promise-v2";
import pokemonMapper from "./pokemon.mapper";
import config from "../../config";

const { domain, pokeApi } = config;

export default class PokemonService {
	constructor() {
		this.pokedex = new Pokedex({ cacheLimit: 5 * 60 * 1000 });
	}

	get(offset, limit) {
		return Promise.resolve(this.pokedex.getPokemonsList({ offset, limit }))
			.then(({ results, ...rest }) =>
				Promise.props({
					...rest,
					results: Promise.map(results, ({ name }) => this.getOne(name)),
				})
			)
			.then(({ previous, next, ...rest }) => ({
				...rest,
				previous: this._replaceUrl(previous),
				next: this._replaceUrl(next),
			}));
	}

	getOne(id) {
		return this.getOneFull(id).then(pokemonMapper);
	}

	getOneFull(id) {
		return Promise.resolve(this.pokedex.getPokemonByName(id));
	}

	_replaceUrl(url) {
		return url ? url.replace(pokeApi.url, domain) : null;
	}
}
