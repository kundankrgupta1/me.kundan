import Hero from "../Components/Hero"
import HrLine from "../Components/HrLine"
import Abouts from "./Abouts"
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
		</>
	)
}

export default Home