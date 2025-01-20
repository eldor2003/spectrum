import React from "react";
import { useState } from "react";
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header>
			<div className='container'>
				<div className='header_row'>
					<a href='#' className='brand_logo'>
						<img src='/images/icons/logo1.svg' alt='Logo' />
					</a>
					<div className={`header_right ${isOpen ? "open" : ""}`}>
						<ul className='header_links'>
							<li>
								<a href='#'>Products</a>
							</li>
							<li>
								<a href='#'>Transparency</a>
							</li>
							<li>
								<a href='#'>Insights</a>
							</li>
							<li>
								<a href='#'>Company</a>
							</li>
							<li>
								<a href='#'>Developers</a>
							</li>
						</ul>
						<div className='header_btns'>
							<a href='#' className='btn_ btn_blue'>
								Contact us
							</a>
							<a href='#' className='btn_'>
								Sign In
							</a>
						</div>
						<div className='close_icon' onClick={toggleMenu}>
							<img src='/images/icons/close_icon.svg' alt='Close Icon' />
						</div>
					</div>
					<div className='hamburger' onClick={toggleMenu}>
						<img src='/images/icons/hamburger.svg' alt='Hamburger Icon' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
