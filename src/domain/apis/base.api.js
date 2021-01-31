import _ from "lodash";
import Promise from "bluebird";
import request from "request-promise";

class BaseApi {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	get(resource, qs) {
		return this._request("GET", resource, qs);
	}

	_request(method, resource, qs = {}, body) {
		return request({
			method,
			uri: this.baseUrl + resource,
			qs,
			body,
			json: true,
		});
	}
}

export default BaseApi;
