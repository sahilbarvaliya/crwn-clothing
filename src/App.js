import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
