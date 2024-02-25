import React from 'react';
import ReactDOM from 'react-dom/client';

import MyApp from './MyApp';
import Profile from './Profile';
import List from './List';
import MyButton from './MyButton';
import ProductFilterableTable from './ProductFilterableTable';
import { Users } from './Users';
import App from './App';

ReactDOM.createRoot(
    document.querySelector('#root')
).render(<App />);