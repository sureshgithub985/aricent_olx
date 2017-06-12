import React from 'react';
import ReactDOM from 'react-dom';

import UserReg from '../components/user_reg/UserRegistration';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

ReactDOM.render(<Header pageInfo="REG"/>, document.getElementById('header'));
ReactDOM.render(<UserReg/>, document.getElementById('regUser'));
ReactDOM.render(<Footer pageInfo="REG"/>, document.getElementById('footer'));
