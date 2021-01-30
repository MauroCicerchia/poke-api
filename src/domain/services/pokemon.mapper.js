import _ from "lodash";

export default ({ id, name, types, sprites }) => {
    return {
        id,
        name,
        types: _.map(types, ({ type }) => type.name),
        sprite: _.get(sprites, "other.official-artwork.front_default"),
    }
}