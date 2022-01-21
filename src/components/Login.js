import React, { useState, useContext } from "react";
import "../assets/css/form.css";
import { FaFacebookSquare, FaGooglePlusSquare } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { omit } from "lodash";
import { LoginUser } from "../actions/Action";
import welcome from '../assets/images/welcome.svg';

const Login = () => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const { authDispatch, message } = useContext(AuthContext);
	const handleChange = (e) => {
		e.persist();
		let name = e.target.name;
		let val = e.target.value;
		validate(e, name, val);
		setValues({
			...values,
			[name]: val,
		});
	};

	// validation function
	const validate = (e, name, value) => {
		switch (name) {
			case "email":
				if (
					!new RegExp(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					).test(value)
				) {
					setErrors({
						...errors,
						email: "Enter a valid email address.",
					});
				} else {
					let newObj = omit(errors, "email");
					setErrors(newObj);
				}
				break;

			case "password":
				// if (
				// 	!new RegExp(
				// 		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
				// 	).test(value)
				// )
				if (value.length < 8) {
					setErrors({
						...errors,
						password:
							// "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
							"Password must have at least 8 characters.",
					});
				} else {
					let newObj = omit(errors, "password");
					setErrors(newObj);
				}
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			Object.keys(errors).length === 0 &&
			Object.keys(values).length !== 0
		) {
			console.log("Form submit");
			LoginUser(authDispatch, values);
			// console.log(values)
		} else {
			setErrors({
				...errors,
				message: "Please fill required fields.",
			});
		}
	};
	return (
		<div className="login_container">
			<div className="login_img col">
				<img src={welcome} alt="Login"/>
			</div>

			<div className="card login col">
				<h3 className="">Login your m-shop account</h3>
				{errors?.message && (
					<span className="error_txt">{errors?.message}</span>
				)}

				<form onSubmit={handleSubmit}>
					<div className="form_field">
						<label>Email *</label>
						<input
							type="email"
							name="email"
							className="form_control"
							placeholder="Enter your email"
							onChange={handleChange}
						/>
						{errors?.email && (
							<div>
								<span className="error_txt">
									{errors?.email}
								</span>
							</div>
						)}
					</div>
					<div className="form_field">
						<label>Password *</label>
						<input
							type="password"
							name="password"
							className="form_control"
							placeholder="Enter your password"
							onChange={handleChange}
						/>
						{errors?.password && (
							<div>
								<span className="error_txt">
									{errors?.password}
								</span>
							</div>
						)}
					</div>
					{message && <span className="error_txt">{message}</span>}
					<div className="form_field">
						<button className="btn primary_btn">Sign In</button>
					</div>
					<span>Or sign in with</span>
					<div className="social_acc">
						<span className="social_btn facebook">
							<FaFacebookSquare className="social_icon" />{" "}
							FaceBook
						</span>
						<span className="social_btn google">
							<FaGooglePlusSquare className="social_icon" />{" "}
							Google
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
