import BaseApi from "./base.api";
import config from "../../config";

class TiersApi extends BaseApi {
	constructor() {
		super(config.tiersApi.url);
	}

	getTier(id) {
		return this.get(`/tiers/${id}`);
	}
}

export default TiersApi;
