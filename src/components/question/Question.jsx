import React from "react";
import { useState } from "react";
const Question = () => {
	const [openIndex, setOpenIndex] = useState(0);
	const handleToggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	const faqItems = [
		{
			question: "What is Spectrum?",
			answer: `Spectrum is an asset-backed token where one token represents one fine troy ounce of a London Good Delivery gold bar, stored in professional vault facilities. Anyone who owns Spectrum has ownership rights to that gold under the custody of Spectrum Trust Company. Since Spectrum represents physical gold, its value is tied directly to the real-time market value of that physical gold. Spectrum gives customers the benefits of actual physical ownership of specific gold bars with the speed and mobility of a digital asset. Customers are able to have fractional ownership of physical bars. On the Spectrum platform, customers can convert their tokens to allocated gold, unallocated gold, or fiat currency (and vice versa) quickly and efficiently, reducing their exposure to settlement risk. Spectrum is also available for trading. Spectrum will also be available on other crypto-asset exchanges, wallets, lending platforms and elsewhere within the crypto ecosystem. At any time, Spectrum holders can lookup the serial number, value and physical characteristics of their vaulted gold just by entering their Ethereum wallet address on the Spectrum lookup tool on Spectrum.com/Spectrum`,
		},
		{
			question:
				"What is the benefit of having physical assets on a blockchain?",
			answer: `Spectrum is an asset-backed token where one token represents one fine troy ounce of a London Good Delivery gold bar, stored in professional vault facilities. Anyone who owns Spectrum has ownership rights to that gold under the custody of Spectrum Trust Company. Since Spectrum represents physical gold, its value is tied directly to the real-time market value of that physical gold. Spectrum gives customers the benefits of actual physical ownership of specific gold bars with the speed and mobility of a digital asset. Customers are able to have fractional ownership of physical bars. On the Spectrum platform, customers can convert their tokens to allocated gold, unallocated gold, or fiat currency (and vice versa) quickly and efficiently, reducing their exposure to settlement risk. Spectrum is also available for trading. Spectrum will also be available on other crypto-asset exchanges, wallets, lending platforms and elsewhere within the crypto ecosystem. At any time, Spectrum holders can lookup the serial number, value and physical characteristics of their vaulted gold just by entering their Ethereum wallet address on the Spectrum lookup tool on Spectrum.com/Spectrum`,
		},
		{
			question:
				"What is the benefit of having physical assets on a blockchain?",
			answer: `Spectrum is an asset-backed token where one token represents one fine troy ounce of a London Good Delivery gold bar, stored in professional vault facilities. Anyone who owns Spectrum has ownership rights to that gold under the custody of Spectrum Trust Company. Since Spectrum represents physical gold, its value is tied directly to the real-time market value of that physical gold. Spectrum gives customers the benefits of actual physical ownership of specific gold bars with the speed and mobility of a digital asset. Customers are able to have fractional ownership of physical bars. On the Spectrum platform, customers can convert their tokens to allocated gold, unallocated gold, or fiat currency (and vice versa) quickly and efficiently, reducing their exposure to settlement risk. Spectrum is also available for trading. Spectrum will also be available on other crypto-asset exchanges, wallets, lending platforms and elsewhere within the crypto ecosystem. At any time, Spectrum holders can lookup the serial number, value and physical characteristics of their vaulted gold just by entering their Ethereum wallet address on the Spectrum lookup tool on Spectrum.com/Spectrum`,
		},
		{
			question:
				"What is the benefit of having physical assets on a blockchain?",
			answer: `Spectrum is an asset-backed token where one token represents one fine troy ounce of a London Good Delivery gold bar, stored in professional vault facilities. Anyone who owns Spectrum has ownership rights to that gold under the custody of Spectrum Trust Company. Since Spectrum represents physical gold, its value is tied directly to the real-time market value of that physical gold. Spectrum gives customers the benefits of actual physical ownership of specific gold bars with the speed and mobility of a digital asset. Customers are able to have fractional ownership of physical bars. On the Spectrum platform, customers can convert their tokens to allocated gold, unallocated gold, or fiat currency (and vice versa) quickly and efficiently, reducing their exposure to settlement risk. Spectrum is also available for trading. Spectrum will also be available on other crypto-asset exchanges, wallets, lending platforms and elsewhere within the crypto ecosystem. At any time, Spectrum holders can lookup the serial number, value and physical characteristics of their vaulted gold just by entering their Ethereum wallet address on the Spectrum lookup tool on Spectrum.com/Spectrum`,
		},
		{
			question:
				"What is the benefit of having physical assets on a blockchain?",
			answer: `Spectrum is an asset-backed token where one token represents one fine troy ounce of a London Good Delivery gold bar, stored in professional vault facilities. Anyone who owns Spectrum has ownership rights to that gold under the custody of Spectrum Trust Company. Since Spectrum represents physical gold, its value is tied directly to the real-time market value of that physical gold. Spectrum gives customers the benefits of actual physical ownership of specific gold bars with the speed and mobility of a digital asset. Customers are able to have fractional ownership of physical bars. On the Spectrum platform, customers can convert their tokens to allocated gold, unallocated gold, or fiat currency (and vice versa) quickly and efficiently, reducing their exposure to settlement risk. Spectrum is also available for trading. Spectrum will also be available on other crypto-asset exchanges, wallets, lending platforms and elsewhere within the crypto ecosystem. At any time, Spectrum holders can lookup the serial number, value and physical characteristics of their vaulted gold just by entering their Ethereum wallet address on the Spectrum lookup tool on Spectrum.com/Spectrum`,
		},
	];

	return (
		<section class='questions'>
			<div class='container'>
				<div class='section_top'>
					<h2 class='section_title'>FAQs</h2>
					<p class='desc'>
						Review frequently asked questions <br />
						about Spectrum
					</p>
				</div>
				<div class='faq'>
					{faqItems.map((item, index) => (
						<div
							key={index}
							className={`faq_item  ${openIndex === index ? "open" : ""}`}
						>
							<div className='faq_title' onClick={() => handleToggle(index)}>
								{item.question}
								<img
									src='/images/icons/arr-right.svg'
									alt=''
									className='arr_right'
								/>
							</div>
							<p
								className='desc faq_body'
								style={{
									height: openIndex === index ? "auto" : "0",
									overflow: "hidden",
								}}
							>
								{item.answer}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Question;
