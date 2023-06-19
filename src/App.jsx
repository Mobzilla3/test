import "./App.css"
import Hero from "./Components/Hero/Hero.jsx"
import Banner from "./Components/Banner.jsx"


export default function App() {
	return (
		<div className="App">
            <Banner trans={true} />
            <Hero />
		</div>
	)
}
