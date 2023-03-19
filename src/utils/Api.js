//SearchExample: https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyDIXwZf1d8tH58-IgrqMY5_OCoJtuV9xdA

class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._key = options.key;
    }
  
    //Check the response from the server
    checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        //If the server gives an error, reject the promis
        return Promise.reject(`Error: ${res.status}`);
    }

    // 1. Loading books
    getInitialBooks(query) {
        return fetch(`${this._baseUrl}${query}${this._key}`, {
            method: 'GET'
        })
        .then(this.checkResponse);
    }

    //2. Get books
    getBooks(query) {
        return fetch(`${this._baseUrl}${query}${this._key}`, {
            method: 'GET'
        })
        .then(this.checkResponse);
    }
}

const api = new Api({
    baseUrl: 'https://www.googleapis.com/books/v1/volumes?q=',
    key: '&filter=free-ebooks&key=AIzaSyDIXwZf1d8tH58-IgrqMY5_OCoJtuV9xdA',
});

export default api;