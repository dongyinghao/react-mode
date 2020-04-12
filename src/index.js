import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import './utils/request'
import './assets/iconfont/iconfont.css'
import './assets/css/animate.min.css'
import './assets/css/commonStyle.scss'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

