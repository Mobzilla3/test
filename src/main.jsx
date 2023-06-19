import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Installation from "./Components/Installation/Installation.jsx"
import About from "./Components/About/About.jsx"
import Faq from "./Components/Faq/Faq.jsx"
import Features from "./Components/Features/Features.jsx"
import "./Components/Navbar.css"
import InstallationStrings from "./Components/Installation/installationData.json"
import aboutStrings from "./Components/About/AboutData.json"
import faqStrings from "./Components/Faq/FaqPointsData.json"
import featuresStrings from "./Components/Features/FeaturesData.json"

let installLang = InstallationStrings.en
let featuresLang = featuresStrings.en
let faqLang = faqStrings.en
let aboutLang = aboutStrings.en
const language = localStorage.getItem("language")
if (language === "pl") {
    installLang = InstallationStrings.pl
    aboutLang = aboutStrings.pl
    faqLang = faqStrings.pl
    featuresLang = featuresStrings.pl
} else if (language === "ru") {
    installLang = InstallationStrings.ru
    aboutLang = aboutStrings.ru
    faqLang = aboutStrings.ru
    featuresLang = featuresStrings.ru
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
        errorElement: <ErrorPage />
	},
    {
        path: "/Installation",
        element: <Installation  lang={installLang}/>,
      },
      {
        path: "/Features",
        element: <Features lang={featuresLang}/>,
      },
      {
        path: "/Faq",
        element: <Faq lang={faqLang}/>,
      },
      {
        path: "/About",
        element: <About lang={aboutLang}/>,
      },
], {basename: "/MRModPack"})

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
