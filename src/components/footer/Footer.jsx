import React from "react";
import Link from "next/link";
const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='header_row'>
					<Link href='#' className='brand_logo'>
						<img src='/images/icons/logo1.svg' alt='Spectrum logo' />
					</Link>
					<div className='header_right'>
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
							<Link href='#' className='btn_ btn_blue'>
								Contact us
							</Link>
							<Link href='#' className='btn_'>
								Sign In
							</Link>
						</div>
					</div>
				</div>
				<div className='footer_bottom'>
					<p className='desc'>
						© 2024 Spectrum Trust Company, LLC All Rights Reserved. NMLS
						#1766787
					</p>
					<p className='desc'>Privacy Policy</p>
					<p className='desc'> | </p>
					<p className='desc'>Cookie Policy</p>
					<p className='desc'> | </p>
					<p className='desc'>
						Cookie Manager (Do not sell my personal information)
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
