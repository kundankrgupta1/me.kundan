import Navbar from "./Components/Navbar"
import AllRoutes from "./Routes/AllRoutes"

const App = () => {
	const breakpoints = {
		base: "0em", // 0px
		sm: "30em", // ~480px
		md: "48em", // ~768px
		lg: "62em", // ~992px
		xl: "80em", // ~1280px
		"2xl": "96em", // ~1536px
	};
	console.log(breakpoints);
	return (
		<div>
			<Navbar />
			<AllRoutes />
		</div>
	)
}
export default App
