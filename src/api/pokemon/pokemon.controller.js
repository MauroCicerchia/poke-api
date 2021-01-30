import _ from "lodash";

export default class Controller {
    get({ service, query: { offset = 0, limit = 20 } }) {
        return service.get(offset, limit);
    }

    getOne({ service, params: { id } }) {
        return service.getOne(id)
    }

    getOneFull({ service, params: { id } }) {
        return service.getOneFull(id)
    }
}
