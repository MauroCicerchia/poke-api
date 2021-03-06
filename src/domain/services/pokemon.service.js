import _ from "lodash";
import Promise from "bluebird";
import Pokedex from "pokedex-promise-v2";
import TiersApi from "../apis/tiers.api";
import pokemonMapper from "./pokemon.mapper";
import config from "../../config";

const { domain, pokeApi } = config;

export default class PokemonService {
	constructor() {
		this.pokedex = new Pokedex({ cacheLimit: 5 * 60 * 1000 });
		this.tiersApi = new TiersApi();
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
		return this.getOneFull(id)
			.then((pokemon) => this._addTier(pokemon))
			.then(pokemonMapper);
	}

	getOneFull(id) {
		return Promise.resolve(this.pokedex.getPokemonByName(id));
	}

	_addTier(pokemon) {
		return this.tiersApi
			.getTier(pokemon.id)
			.then(({ tier }) => ({ ...pokemon, tier }));
	}

	_replaceUrl(url) {
		return url ? url.replace(pokeApi.url, domain) : null;
	}
}
