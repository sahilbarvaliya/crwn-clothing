import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAtg55MaAVaQWcyDgoHt5LQi3W60DDfN3s",
	authDomain: "crwn-clothings-db-76c03.firebaseapp.com",
	projectId: "crwn-clothings-db-76c03",
	storageBucket: "crwn-clothings-db-76c03.appspot.com",
	messagingSenderId: "972214071101",
	appId: "1:972214071101:web:382152bd3230eefceedf54",
	measurementId: "G-1Z1793N7WZ",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
	auth.signInWithPopup(provider);
};

export default firebase;
