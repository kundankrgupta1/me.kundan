import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import HrLine from "../Components/HrLine"
import Abouts from "./Abouts"
import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./Skills"

const Home = () => {
	return (
		<>
			<Hero />
			<HrLine />
			<Abouts />
			<HrLine />
			<Skills />
			<HrLine />
			<Projects />
			<HrLine />
			<Contact />
			<Footer />
		</>
	)
}

export default Home