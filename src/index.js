import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

//Routes
import { BrowserRouter } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();