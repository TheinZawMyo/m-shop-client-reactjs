import react, { useContext, useState, useEffect } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import { AuthContext } from "../context/AuthContext";
import { updateProfile, userDetail } from "../actions/Action";
import { useAlert } from "react-alert";

const Profile = () => {
	const { user, authDispatch } = useContext(AuthContext);
	const [loginForm, setLoginForm] = useState(false);
	const [inputPhone, setInputPhone] = useState("");
	const [inputAddress, setInputAddress] = useState("");
	const alert = useAlert();

	//on change data from input
	// const handleChange = (e) => {
	// 	e.preventDefault();
	// 	let name = e.target.name;
	// 	let val = e.target.value;
	// 	setUserInfo({
	// 		...userInfo,
	// 		[name]: val,
	// 	});
	// 	// console.log(userInfo);
	// };

	useEffect(() => {
		user && userDetail(authDispatch, user?.id);
		user && setInputPhone(user.phone);
		user && setInputAddress(user.address);
	}, [user.id])

	// console.log(user.address);

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

	const userInfo = {
		phone: inputPhone,
		address: inputAddress
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		userInfo && updateProfile(authDispatch, userInfo, user.id);
		alert.show("Your information have been changed.");
	};


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
						<form onSubmit={handleSubmit}>
							<div className="form_field">
								<label>Phone Number *</label>
								<input
									type="text"
									className="form_control"
									name="phone"
									placeholder="Enter your phone number"
									maxLength={12}
									minLength={9}
									value={inputPhone || ""}
									onChange={(e) => setInputPhone(e.target.value)}
									required
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
								<label>Address *</label>
								<input
									type="text"
									className="form_control"
									name="address"
									placeholder="Enter your address"
									maxLength={50}
									minLength={10}
									value={inputAddress || ""}
									onChange={(e) => setInputAddress(e.target.value)}
									required
								/>
								{/* {errors?.name && (
							<div>
								<span className="error_txt">
									{errors?.name}
								</span>
							</div>
						)} */}
							</div>
							<button type="submit" className="btn primary_btn">
								Save
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
