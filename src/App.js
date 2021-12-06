import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	auth,
	createUserProfileDocument,
} from "./components/firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
					console.log(this.state);
				});
			}
			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Router>
					<Header currentUser={this.state.currentUser} />
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route exact path="/shop" element={<ShopPage />} />
						<Route exact path="/signin" element={<SingInAndSignUpPage />} />
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
