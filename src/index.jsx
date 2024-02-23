import React from 'react';
import ReactDOM from 'react-dom/client';

import MyApp from './MyApp';
import Profile from './Profile';
import List from './List';

ReactDOM.createRoot(
    document.querySelector('#root')
).render(<List />);