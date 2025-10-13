import ReactDOM from 'react-dom/client';
import App from './App';
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import router from './router/Router'
import store from './store/index'
import './scss/reset.scss'
import './scss/layout.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </Provider>
);
