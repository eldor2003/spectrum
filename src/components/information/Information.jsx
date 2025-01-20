import React from "react";

const Information = () => {
	return (
		<section className='information'>
			<div className='container'>
				<h2 className='section_title'>What is Spectrum?</h2>
				<div className='info_row'>
					<div className='info_desc'>
						<p className='desc'>
							Spectrum is a digital token backed by physical gold stored in a
							secure vault. Token holders can exchange the token into USD/USDT
							at any time, and a daily burn/add mechanism maintains a stable 1:1
							exchange rate to the US dollar.
						</p>
						<p className='desc'>
							Thanks to the Proof of Reserves mechanism, users can check the
							total amount of issued tokens and gold in the vault at any time.
							Everscale's blockchain technology ensures transparency and
							reliability of transactions, allowing to convert tokens to and
							from other assets quickly and efficiently.
						</p>
					</div>
					<div className='info_right'>
						<div className='info_item'>
							<div>
								<div className='info_title'>
									<img
										src='/images/icons/spectrum_icon.svg'
										alt='Spectrum Icon'
									/>
									Spectrum Onesheet
								</div>
								<p className='desc'>
									Spectrum, issued by our company, is a physical gold-backed
									stablecoin designed for daily payments and international
									settlements in a decentralized environment.
								</p>
							</div>
							<a href='#' className='read_more'>
								Learn More
							</a>
						</div>
						<div className='info_item'>
							<div>
								<div className='info_title'>
									<img src='/images/icons/carbon.svg' alt='Carbon Icon' />
									Spectrum White Paper
								</div>
								<p className='desc'>
									Check out White Paper for how the 1:1 to dollar model (via
									gold in reserve), blockchain protocol, issue details and Proof
									of Reserves are implemented.
								</p>
							</div>
							<a href='#' className='read_more'>
								Learn More
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Information;
