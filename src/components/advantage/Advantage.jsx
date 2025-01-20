import React from "react";

const Advantage = () => {
	return (
		<section className='advantage'>
			<div className='container'>
				<h2 className='section_title'>Working with large volumes of funds</h2>
				<div className='advantage_row'>
					<div className='advantge_item'>
						<div className='advantage_title'>
							<img src='/images/icons/blue_ellipse.svg' alt='High security' />
							High security
						</div>
						<p className='desc'>
							Spectrum token is designed with modern encryption standards in
							mind. We support multi-signature and cold storage of large amounts
							on corporate wallets.
						</p>
					</div>
					<div className='advantge_item'>
						<div className='advantage_title'>
							<img src='/images/icons/blue_ellipse.svg' alt='No blocking' />
							No blocking
						</div>
						<p className='desc'>
							Unlike traditional banking, crypto transactions cannot be frozen
							or blocked. Your funds are always under your control.
						</p>
					</div>
					<div className='advantge_item'>
						<div className='advantage_title'>
							<img src='/images/icons/blue_ellipse.svg' alt='Transparency' />
							Transparency
						</div>
						<p className='desc'>
							All transactions are recorded in Everscale, allowing for quick and
							accurate verification and auditing.
						</p>
					</div>
				</div>
				<h2 className='section_title'>Our ecosystem and future developments</h2>
				<div className='advantage_row'>
					<div className='advantge_item'>
						<div className='advantage_title'>
							<img src='/images/icons/blue_ellipse.svg' alt='Own exchange' />
							Own exchange
						</div>
						<p className='desc'>
							We are actively developing both decentralized and centralized
							platforms. We plan to launch our own exchange, which will offer
							favorable listing and trading conditions for Spectrum token.
						</p>
					</div>
					<div className='advantge_item'>
						<div className='advantage_title'>
							<img src='/images/icons/blue_ellipse.svg' alt='Own wallet' />
							Own wallet
						</div>
						<p className='desc'>
							EverWallet cryptocurrency wallet is provided with advanced
							security features and user-friendly UX.
						</p>
					</div>
					<div className='advantge_item'>
						<div className='advantage_title'>
							<img
								src='/images/icons/blue_ellipse.svg'
								alt='Integration with B2B segment'
							/>
							Integration with B2B segment
						</div>
						<p className='desc'>
							We develop APIs and reliable tools for corporate clients. This
							will allow companies to securely use Spectrum token in
							settlements, financial reports and smart contracts.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Advantage;
