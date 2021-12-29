import react from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import Detail from "./screens/Detail";
import ProductContextProvider from "./context/ProductContext";
import AuthContextProvider from "./context/AuthContext";

function App() {
	return (
		<AuthContextProvider>
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
						<Route exact path="/user">
							<Profile />
						</Route>
						<Route exact path="/detail/:id">
							<Detail />
						</Route>
					</Switch>
				</ProductContextProvider>
			</Router>
		</AuthContextProvider>
	);
}

export default App;
