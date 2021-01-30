import mongoose from "mongoose";
import Promise from "bluebird";
import config from "../config";
mongoose.Promise = Promise;
const {
    mongo: { uri }
} = config;

export default () =>
    mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch(() => {
            console.log("Connection to MongoDB failed");
            process.exit(1);
        });
