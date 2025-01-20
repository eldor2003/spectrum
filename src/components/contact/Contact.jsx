import Link from "next/link";
import React from "react";

const Contact = () => {
	return (
		<section className='contact'>
			<div className='container'>
				<div className='contact_row'>
					<div className='contact_left'>
						<h2 className='section_title'>Contacts</h2>
						<p className='desc'>
							Are you an institutional investor or corporate client? Fill out
							the form below and we will contact you with the best Spectrum
							token solutions.
						</p>
					</div>
					<form className='contact_form'>
						<div className='form_group'>
							<label>
								<p>
									First Name<sup>*</sup>
								</p>
								<input type='text' />
							</label>
							<label>
								<p>
									Last Name<sup>*</sup>
								</p>
								<input type='text' />
							</label>
						</div>
						<label>
							<p>
								Email <sup>*</sup>
							</p>
							<input type='email' />
						</label>
						<div className='form_group'>
							<label>
								<p>
									Job Title <sup>*</sup>
								</p>
								<input type='text' />
							</label>
							<label>
								<p>
									Company Name <sup>*</sup>
								</p>
								<input type='text' />
							</label>
						</div>
						<label>
							<p>
								My company is headquartered in: <sup>*</sup>
							</p>
							<input type='text' value='United States' />
						</label>
						<label>
							<p>Type of Business</p>
							<select>
								<option value='' selected>
									Please Select
								</option>
								<option value='1'>option1</option>
								<option value='2'>option2</option>
							</select>
						</label>
						<label>
							<p>Assets Under Management</p>
							<select>
								<option value='' selected>
									Please Select
								</option>
								<option value='1'>option1</option>
								<option value='2'>option2</option>
							</select>
						</label>
						<label>
							<p>
								How can Spectrum best help?<sup>*</sup>
							</p>
							<textarea></textarea>
						</label>
						<p className='desc'>
							Spectrum needs the contact information you provide to us to
							contact you about our products and services. You may unsubscribe
							from these communications at any time. For information on how to
							unsubscribe, as well as our privacy practices and commitment to
							protecting your privacy, please review our{" "}
							<Link href='/'>Privacy Policy</Link>
						</p>
						<button type='submit' className='btn_ btn_blue'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
