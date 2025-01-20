import React from "react";

const Econom = () => {
	return (
		<section className='econom'>
			<div className='container'>
				<h2 className='section_title'>Economically viable</h2>
				<div className='caption'>Instant transactions</div>
				<p className='desc'>
					Unlike T+2 and other delays in traditional markets, blockchain
					transfers take minutes to complete and are free of counter risks
					(settlement processes, netting, etc.).
				</p>
				<img
					src='/images/econom_image.png'
					alt='Economically viable'
					className='econom_image'
				/>
			</div>
		</section>
	);
};

export default Econom;
