import "./style.css";

const Form = (props) => {
    return (
        <form className="form js-form">
            <fieldset className="form__fieldset">
                <legend className="form_legend">Przelicznik walut</legend>
                <p>
                    <label className="form__label">
                        Kwota w PLN: <input className="form__currency js-plnCurrency" min="0" type="number" step="any"
                            name="PLN" required placeholder="Wpisz kwotę" autofocus />
                    </label>
                </p>
                <p>
                    Wybierz walutę:
                    <select className="form__selectCurrency js-selectCurrency">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </p>
                <button className="form__button">Przelicz</button>
                <button type="reset" className="form__button">Wyczyść</button>
                <p>
                    Otrzymasz : <input name="result" className="form__currency js-resultCurrency" readonly />
                </p>
            </fieldset>

        </form>
    )
}

export default Form;