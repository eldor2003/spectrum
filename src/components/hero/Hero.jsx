import React from "react";
import Link from "next/link";
const Hero = () => {
	return (
		<section className='hero'>
			<div className='container'>
				<h1 className='hero_title'>
					Blockchain infrastructure for enterprises
				</h1>
				<p className='desc'>
					Financial services providers have successfully utilized the Spectrum
					platform and its technology to issue and manage digital assets. We
					offer a reliable and flexible solution for those looking to expand
					their business using blockchain and stackablecoins backed by physical
					gold.
				</p>
				<Link href='/' className='btn_ btn_blue'>
					Contact us
				</Link>
			</div>
			<img
				src='/images/hero_image1.png'
				alt='Hero Image 1'
				className='hero_image1'
			/>
			<img
				src='/images/hero_image2.png'
				alt='Hero Image 2'
				className='hero_image2'
			/>
		</section>
	);
};

export default Hero;
