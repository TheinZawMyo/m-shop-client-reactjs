import react from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import ProductContextProvider from "./context/ProductContext";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<ProductContextProvider>
					<Switch>
						<Route exact={true} path="/">
							<Home />
						</Route>
						<Route exact path="/cart">
							<Cart />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
					</Switch>
				</ProductContextProvider>
			</Router>
		</div>
	);
}

export default App;
