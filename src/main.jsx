import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import todoStore from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={todoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)

// Initialize Redux store with data from local storage
const storedTodos = JSON.parse(localStorage.getItem('todos'));
if (storedTodos) {
  store.dispatch({ type: 'INITIALIZE_TODOS', payload: storedTodos });
}
