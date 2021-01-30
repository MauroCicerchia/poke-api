import _ from "lodash";

class Home {
    constructor(model) {
        this.model = model;
    }

    get(skip, limit) {
        return this.model
            .find()
            .skip(skip)
            .limit(limit);
    }

    getOneById(_id) {
        return this.model.findOne({ _id });
    }

    insert(document) {
        this.model.insertMany([_.assign({ _id }, document)]);
    }

    remove(_id) {
        return this.model.deleteOne({ _id });
    }
}
export default Home;
