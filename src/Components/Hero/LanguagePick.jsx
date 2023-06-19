import "./LanguagePick.css"
import ru from "/src/assets/ua.webp"
import en from "/src/assets/en.png"
import pl from "/src/assets/pl.png"


export default function LanguagePick() {
    function chooseLanguage(lang) {
		switch (lang) {
			case "en":
				localStorage.setItem("language", "en")
				break
			case "pl":
				localStorage.setItem("language", "pl")
				break
			case "ru":
				localStorage.setItem("language", "ru")
				break
			default:
				localStorage.setItem("language", "en")
				break
		}
        location.reload()
    }

	return (
        <>
		<div className="lang-picker-wrapper">
			<div className="languagePick-wrapper">
				<h1 className="languagePick-heading">Choose Language / Wybierz język / Выберите язык</h1>
				<div className="languages">
					<div onClick={() => chooseLanguage("en")} className="language">
						<img className="language-flag" src={en} alt="english" />
						<h2>English</h2>
					</div>
					<div onClick={() => chooseLanguage("pl")} className="language">
						<img className="language-flag" src={pl} alt="Polski" />
						<h2>Polski</h2>
					</div>
					<div onClick={() => chooseLanguage("en")} className="language">
						<img className="language-flag" src={ru} alt="Русский" />
						<h2>Русский (скоро)</h2>
					</div>
				</div>
			</div>
		</div>
        </>
	)
}
