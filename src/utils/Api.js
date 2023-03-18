class Api {
    constructor(options) {
        this._url = options.url;
        this._token = options.token;
    }
  
    //Check the response from the server
    checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        //If the server gives an error, reject the promis
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // 1. Loading books
    getInitialBooks() {
        return fetch(`${this._url}/books`, {
            method: 'GET',
            headers: {
                authorization: this._token,
            }
        })
        .then(this.checkResponse);
    }
}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-59',
    token: '8121c997-2813-48cf-a521-b118f084a101',
});

export default api;