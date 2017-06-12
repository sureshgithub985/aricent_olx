import React from 'react';
import ReactDOM from 'react-dom';

import AddPost from '../components/adpost/AdPost';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

ReactDOM.render(<Header pageInfo="POSTAD"/>, document.getElementById('header'));
ReactDOM.render(<AddPost/>, document.getElementById('postAdd'));
ReactDOM.render(<Footer pageInfo="POSTAD"/>, document.getElementById('footer'));
