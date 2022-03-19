import './index.css';
import _ from 'lodash';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDaqdWIj43RwOB2o_kOP2CzBKZpbecHBbM",
  authDomain: "clubphilidorajedrez.firebaseapp.com",
  databaseURL: "https://clubphilidorajedrez.firebaseio.com",
  projectId: "clubphilidorajedrez",
  storageBucket: "clubphilidorajedrez.appspot.com",
  messagingSenderId: "8430141422",
  appId: "1:8430141422:web:e7d7b2c6c55c987b36d8ff",
  measurementId: "G-RQE3CX5Q7Q"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function obtenerTorneos(db) {

  const torneosCollection = collection(db, 'torneos');
  const torneosSnapshot = await getDocs(torneosCollection);
  const torneosList = torneosSnapshot.docs.map(doc => doc.data());
  console.log(torneosList);
}

obtenerTorneos();