import react, { useContext, useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
	const { user } = useContext(AuthContext);
	const [loginForm, setLoginForm] = useState(false);

	const link =
		loginForm === false ? (
			<span className="note_link">
				Already member?{" "}
				<span className="link" onClick={() => setLoginForm(!loginForm)}>
					Sign in{" "}
				</span>
				here.
			</span>
		) : (
			<span className="note_link">
				Not a member?{" "}
				<span className="link" onClick={() => setLoginForm(!loginForm)}>
					Sign Up
				</span>{" "}
				here.
			</span>
		);

	const Form = loginForm === false ? <Register /> : <Login />;

	return (
		<div className="container form_container">
			{!user && <div className="notice">{link}</div>}
			{!user ? (
				Form
			) : (
				<div className="card profile_card">
					<h3 className="title">Hello {user?.name} </h3>
					<div className="card_description">
						Your order list is blah blah.
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
