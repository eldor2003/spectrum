import React from "react";

const Reports = () => {
	return (
		<section className='reports'>
			<div className='container'>
				<div className='desc'>Reserve reports</div>
				<h2 className='section_title'>
					We make all reports accessible because your funds matter
				</h2>
				<a href='#' className='btn_ btn_white'>
					View reports
				</a>
				<img
					src='/images/report_image.png'
					alt='Report Image'
					className='report_image'
				/>
			</div>
		</section>
	);
};

export default Reports;
