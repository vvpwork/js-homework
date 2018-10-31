const axios = require('axios');

export default class Model {
  constructor() {
    this.API_KEY = '10469038-35fcd3e8ac9b88b2536fb26c9';
    this.baseUrl = 'https://pixabay.com/api/';
    this.perPage = 12;
    this.page = 1;
    this.userChoise = [];
  }

  getImg(value) {
    return axios.get(
      `${this.baseUrl}?key=${this.API_KEY}&q=${value}&page=${
        this.page
      }&per_page=${this.perPage}`,
    );
  }
  showMore(value) {
    this.page += 1;
    return this.getImg(value);
  }

  addUserChoise({id, src}) {
    let img = {
      largeImageURL: src,
      id: id,
    };
    this.userChoise.push(img);
    return this.userChoise;
  }

  deteileImg(target){
      let img = {
          url:target.src,
          id:target.id
      }
      return img
  }
}
