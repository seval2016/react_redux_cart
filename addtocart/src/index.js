import React from 'react';
import ReactDOM from 'react-dom/client';  // 'react-dom/client' kullanıyoruz
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

// Yeni API kullanılarak root oluşturuluyor
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(  // 'render' fonksiyonunu kullanarak uygulamayı render ediyoruz
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
