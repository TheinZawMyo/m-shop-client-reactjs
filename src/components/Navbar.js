import React, {useState} from "react";
import {Link} from 'react-router-dom';
import '../css/navbar.css';
import {BiMenu, BiCartAlt, BiUser} from 'react-icons/bi';

function Navbar() {
    const [click, setClick] = useState(false);
    
	return (
		<div>
			<header>
				<nav className="nav_bar">
					<div className="nav_logo">
                        <Link to="/" className="logo_link">M-Shop</Link>
					</div>

					<div className={`nav_menu ${click ? 'show_menu': ''}`} id="nav-menu">
						<ul className="menu_list">
							<li className="menu_item">
                                <Link to="/" className="menu_link" onClick={() => setClick(!click)}>Home</Link>
							</li>
							<li className="menu_item">
                                <Link to="/cart" className="menu_link" onClick={() => setClick(!click)}>Cart <BiCartAlt className="icon"/></Link>
							</li>
                            <li className="menu_item">
                                <Link to="/profile" className="menu_link" onClick={() => setClick(!click)}>Profile <BiUser className="icon"/></Link>
							</li>
						</ul>
					</div>

					<div className="toggle_btn" id="nav-toggle" onClick={() => setClick(!click)}>
						<BiMenu/>
					</div>
				</nav>
			</header>
            
		</div>
	);
}

export default Navbar;
