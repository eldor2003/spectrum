import React from "react";

const Token = () => {
	return (
		<section className='token'>
			<div className='container'>
				<h2 className='section_title'>
					A digital token backed by physical gold
				</h2>
				<div className='caption'>Learn more about Spectrum</div>
				<p className='desc'>
					The Spectrum token gives investors a cost-effective and secure way to
					settle payments with the benefits of a decentralized blockchain. We
					use a daily issuance adjustment mechanism to keep the aggregate price
					of all Spectrum tokens equal to the dollar value of gold in the vault
					(1 Spektrum ≈ $1 USD). When the gold price rises, we issue additional
					tokens; when it falls, we burn some of the reserve tokens on the
					master wallet.
				</p>
				<h2 className='section_title text-center'>Why Spectrum?</h2>
				<div className='token_row'>
					<div className='token_item'>
						<div className='token_title'>
							<img
								src='/images/icons/token1.svg'
								alt='Stability and security'
							/>
							Stability and security
						</div>
						<p className='desc'>
							Spectrum token is backed by physical gold, which is stored in a
							professional vault. We publish regular reports and provide audit
							access to confirm reserves.
						</p>
					</div>
					<div className='token_item'>
						<div className='token_title'>
							<img src='/images/icons/token1.svg' alt='Everscale blockchain' />
							Everscale blockchain
						</div>
						<p className='desc'>
							We use the Everscale blockchain, which has high bandwidth,
							decentralization and strong cryptographic protection. All
							transactions are transparently recorded and available in real
							time.
						</p>
					</div>
					<div className='token_item'>
						<div className='token_title'>
							<img
								src='/images/icons/token1.svg'
								alt='Affordability and low fees'
							/>
							Affordability and low fees
						</div>
						<p className='desc'>
							Unlike traditional wire transfers or futures trading, blockchain
							transactions cost less and are processed faster. There are no
							volume or minimum purchase limits.
						</p>
					</div>
					<div className='token_item'>
						<div className='token_title'>
							<img
								src='/images/icons/token1.svg'
								alt='Flexible B2B solutions'
							/>
							Flexible B2B solutions
						</div>
						<p className='desc'>
							Companies have access to an instant settlement mechanism: Spectrum
							tokens can be transferred to partners or employees worldwide,
							bypassing complex banking procedures and delays.
						</p>
					</div>
					<div className='token_item'>
						<div className='token_title'>
							<img src='/images/icons/token1.svg' alt='Proof of Reserves' />
							Proof of Reserves
						</div>
						<p className='desc'>
							Our approach to Proof of Reserves is simple and straightforward:
							physical gold is held in a secure vault and is available for audit
							24/7, eliminating the risks of a rogue issuer.
						</p>
					</div>
					<div className='token_item'>
						<div className='token_title'>
							<img
								src='/images/icons/token1.svg'
								alt='Emergency stabilization'
							/>
							Emergency stabilization
						</div>
						<p className='desc'>
							If the price of gold on the global market drops by more than 20%,
							we increase the physical gold reserve to keep the token collateral
							stable.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Token;
