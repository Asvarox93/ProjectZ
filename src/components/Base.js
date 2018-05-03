import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAL2JaRwvDOWVMZUhz9Vqt8Lb5CMHc153g",
  authDomain: "zdrowie-8aaf1.firebaseapp.com",
  databaseURL: "https://zdrowie-8aaf1.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
