module.exports = {
    mongo: {
        uri: process.env.MONGO_URI || "mongodb://localhost:27017/your_db"
    },
    port: process.env.PORT || 9001
};
