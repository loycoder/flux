import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import   MyButtonController from './components/MyButtonController';



ReactDOM.render(
    <div>
        <MyButtonController/>
    </div>,
    document.getElementById('root'));

registerServiceWorker();
