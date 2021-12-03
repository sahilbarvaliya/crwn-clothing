import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/shop" element={<ShopPage />} />
					<Route exact path="/signin" element={<SingInAndSignUpPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
