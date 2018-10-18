export default class Model {
  constructor() {
    (this.appKey = '5b93d8100e62278344b8abff221294244b92ecbf5b0bd'),
      (this.urlPreview = 'https://api.linkpreview.net'),
      (this.url = []);
  }

  userUrl(url) {
    this.url.push(this.urlSlesh(url));
    this.setLocalStorageObjectItem('url_list', this.url);
    return this.url;
  }

  urlSlesh(url) {
    if (url.slice(-1) !== '/') return url + '/';
    return url;
  }

  preview(user_url) {
    return fetch(`${this.urlPreview}/?key=${this.appKey}&q=${user_url}`).then(
      response => {
        if (response.ok) return response.json();
        throw new Error(`error:${response.statusText}`);
      },
    );
  }
  previewList() {
    let tempArr = [];
    this.url.map(r => {
      this.preview(r)
        .then(data => tempArr.push(data))
        .catch(err => console.log(err));
    });
    this.setLocalStorageObjectItem('url__items', tempArr);
    return tempArr;
  }

  getLocalStorageObjectItem(key) {
    var json = localStorage.getItem(key);
    if (json === undefined) {
      return undefined;
    }
    return JSON.parse(json);
  }

  setLocalStorageObjectItem(key, value) {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  startUrlList() {
    this.url = this.getLocalStorageObjectItem('url_list');
    return this.url;
  }

  deletUrl(url) {
    this.url.map(r => {
      if (this.urlSlesh(url) == r) {
        this.url.splice(this.url.indexOf(r), 1);
        this.setLocalStorageObjectItem('url_list', this.url);
      }
    });
  }
}
