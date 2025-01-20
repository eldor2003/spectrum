import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='header_row'>
					<a href='#' className='brand_logo'>
						<img src='/images/icons/logo1.svg' alt='Spectrum logo' />
					</a>
					<div className='header_right'>
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
