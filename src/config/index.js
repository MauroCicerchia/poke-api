export default {
    mongo: {
        uri: process.env.MONGO_URI || "mongodb://localhost:27017/your_db"
    },
    port: process.env.PORT || 9001,
    domain: process.env.DOMAIN || "http://localhost:9001/api",
    pokeApi: {
        url: process.env.POKE_API_URL || "https://pokeapi.co/api/v2"
    },
    tiersApi: {
        url: process.env.TIERS_API_URL || "https://poke-tiers-api.herokuapp.com"
    }
};
