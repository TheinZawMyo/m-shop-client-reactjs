import react, { useContext, useState, useEffect } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import { AuthContext } from "../context/AuthContext";
import { googleLogin, updateProfile, userDetail } from "../actions/Action";
import { useAlert } from "react-alert";

const Profile = () => {
	const { user, orderList, authDispatch } = useContext(AuthContext);
	const [loginForm, setLoginForm] = useState(false);
	const [inputPhone, setInputPhone] = useState("");
	const [inputAddress, setInputAddress] = useState("");
	const alert = useAlert();

	// console.log(orderList);

	useEffect(() => {
		user && userDetail(authDispatch, user?.id);
		user && setInputPhone(user.phone);
		user && setInputAddress(user.address);
	}, [user.id]);

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
		address: inputAddress,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		userInfo && updateProfile(authDispatch, userInfo, user.id);
		alert.show("Your information have been changed.");
	};

	// useEffect(() => {
	// 	googleLogin(authDispatch);
	// }, []);

	return (
		<div className="container form_container">
			{!user && <div className="notice">{link}</div>}
			<br />
			{!user ? (
				Form
			) : (
				<div className="card profile_card">
					<h3 className="title">Hello {user?.name} </h3>
					<div className="card_description order_table">
						{orderList.length !== 0}
						<table className="table">
							<thead>
								<tr className="tb_row">
									<th className="tb_col">Order ID</th>
									<th className="tb_col">Product Name</th>
									<th className="tb_col">Qty</th>
									<th className="tb_col">Price</th>
									<th className="tb_col">Order Date</th>
									<th className="tb_col">Order Status</th>
								</tr>
							</thead>
							<tbody>
								{orderList.map((order) => {
									return (
										<tr
											key={order.order_id}
											className="tb_row"
										>
											<td className="tb_col">
												{order.order_id}
											</td>
											<td className="tb_col">
												{order.product_name}
											</td>
											<td className="tb_col">
												{order.qty}
											</td>
											<td className="tb_col">
												{order.price}
											</td>
											<td className="tb_col">
												{order.ordered_date}
											</td>
											<td className="tb_col">
												{order.order_status === 1 ? (
													<span className="txt_warning">
														Pending
													</span>
												) : (
													<span className="txt_success">
														Deliver
													</span>
												)}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
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
									onChange={(e) =>
										setInputPhone(e.target.value)
									}
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
									onChange={(e) =>
										setInputAddress(e.target.value)
									}
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
