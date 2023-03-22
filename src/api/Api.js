//SearchExample:
//https://www.googleapis.com/books/v1/volumes?q=intitle:javascript+subject:computers&orderBy=newest&filter=partial&key=APIKEY&startIndex=0&maxResults=30

class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._filter = options.filter;
        this._key = options.key;
        this._maxResults = options.maxResults;
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
    getBooks(query, category, order, startIndex) {
        return fetch(`${this._baseUrl}q=intitle:${query}${category}&orderBy=${order}&filter=${this._filter}&key=${this._key}&startIndex=${startIndex}&maxResults=${this._maxResults}&langRestrict=en`, {
            method: 'GET'
        })
            .then(this.checkResponse);
    }
}

const api = new Api({
    baseUrl: 'https://www.googleapis.com/books/v1/volumes?',
    filter: 'partial',
    maxResults: 30, 
    key: process.env.REACT_APP_API_KEY,
});

export default api;