import react from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Profile from './screens/Profile';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact={true} path="/" element={<Home />}></Route>
				<Route exact path="cart" element={<Cart />} />
        <Route exact path="profile" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
