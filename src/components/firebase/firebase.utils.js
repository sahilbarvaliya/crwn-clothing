import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
