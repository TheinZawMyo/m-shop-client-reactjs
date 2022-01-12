import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import Detail from "./screens/Detail";
import ProductContextProvider from "./context/ProductContext";
import { Provider as AlertProvider } from "react-alert";
import AuthContextProvider from "./context/AuthContext";
import AddToCartContextProvider from "./context/AddToCartContext";
import AlertTemplate from "react-alert-template-basic";

function App() {
	const options = {
		position: "top center",
		timeout: 5000,
		offset: "30px",
		transition: "scale",
	};
	return (
		<AlertProvider template={AlertTemplate} {...options}>
			<AuthContextProvider>
				<AddToCartContextProvider>
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
				</AddToCartContextProvider>
			</AuthContextProvider>
		</AlertProvider>
	);
}

export default App;
