import React from "react";
import { useState } from "react";
import Link from "next/link";
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header>
			<div className='container'>
				<div className='header_row'>
					<Link href='/' className='brand_logo'>
						<img src='/images/icons/logo1.svg' alt='Logo' />
					</Link>
					<div className={`header_right ${isOpen ? "open" : ""}`}>
						<ul className='header_links'>
							<li>
								<Link href='/'>Products</Link>
							</li>
							<li>
								<Link href='/'>Transparency</Link>
							</li>
							<li>
								<Link href='/'>Insights</Link>
							</li>
							<li>
								<Link href='/'>Company</Link>
							</li>
							<li>
								<Link href='/'>Developers</Link>
							</li>
						</ul>
						<div className='header_btns'>
							<Link href='/' className='btn_ btn_blue'>
								Contact us
							</Link>
							<Link href='/' className='btn_'>
								Sign In
							</Link>
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
