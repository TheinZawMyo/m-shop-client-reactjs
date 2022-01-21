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

	const updateProfile = () => {};

	return (
		<div className="container form_container">
			{!user && <div className="notice">{link}</div>}
			<br />
			{!user ? (
				Form
			) : (
				<div className="card profile_card">
					<h3 className="title">Hello {user?.name} </h3>
					<div className="card_description">
						Your order list is blah blah.
					</div>
					<div className="update_form">
						<h4 className="title">Update User Information</h4>
						<form onSubmit={updateProfile}>
							<div className="form_field">
								<label>Your Phone Number *</label>
								<input
									type="text"
									className="form_control"
									name="phone"
									placeholder="Enter your phone number"
									maxLength={12}
								/>
								{/* {errors?.name && (
							<div>
								<span className="error_txt">
									{errors?.name}
								</span>
							</div>
						)} */}
							</div>
							<div className="form_field">
								<label>Your Address *</label>
								<input
									type="text"
									className="form_control"
									name="address"
									placeholder="Enter your address"
									maxLength={50}
								/>
								{/* {errors?.name && (
							<div>
								<span className="error_txt">
									{errors?.name}
								</span>
							</div>
						)} */}
							</div>
							<button className="btn primary_btn">Save</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
