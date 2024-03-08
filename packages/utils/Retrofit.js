import Hex from './Hex';

export default class Retrofit {
  constructor(service) {
    this.service = service;
  }

  toQuery(params) {
    return Object.keys(params)
      .filter(key => Hex.validAny(params[key]))
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }

  get(url, params, cb) {
    if (cb === undefined) {
      cb = params;
      params = undefined;
    }
    if (params !== undefined) {
      url = url + '?' + this.toQuery(params);
    }
    return this.service.get(url).then(({ data }) => {
      cb(data);
      return data;
    });
  }

  post(url, params, cb) {
    return this.service.post(url, params).then(({ data }) => {
      cb(data);
      return data;
    });
  }

  put(url, params, cb) {
    return this.service.put(url, params).then(({ data }) => {
      cb(data);
      return data;
    });
  }

  delete(url, cb) {
    return this.service.delete(url).then(({ data }) => {
      cb(data);
      return data;
    });
  }
}
