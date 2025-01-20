import Advantage from "@/components/advantage/Advantage";
import Contact from "@/components/contact/Contact";
import Econom from "@/components/econom/Econom";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Information from "@/components/information/Information";
import Question from "@/components/question/Question";
import Reports from "@/components/reports/Reports";
import Token from "@/components/token/Token";
import React from "react";

const MainPage = () => {
	return (
		<>
			<Header />
			<Hero />
			<Information />
			<Reports />
			<Token />
			<Econom />
			<Advantage />
			<Contact />
			<Question />
			<Footer />
		</>
	);
};

export default MainPage;
