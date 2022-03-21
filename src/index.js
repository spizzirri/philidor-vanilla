import './index.css';
//import _ from 'lodash';
import Firebase from './firebase';
import { development } from './environment';

const firebase = new Firebase(development);

const news = firebase.getData('noticias');
const school = firebase.getData('escuela');

console.log(news);
console.log(school);