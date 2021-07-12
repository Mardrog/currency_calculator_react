import "./style.css";
import { Buttons } from "../Buttons";
import { ChooseCurrency } from "../ChooseCurrency";

const Form = ({ amount, setAmount, currency, setCurrency, result, countCurrency, currencies, setResult }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form_legend">Przelicznik walut</legend>
                <p>
                    <label className="form__label">
                        Kwota w PLN:<span>&nbsp;&nbsp;</span>
                        <input
                            className="form__currency"
                            min="0"
                            type="number"
                            step="any"
                            name="PLN"
                            required
                            placeholder="Wpisz kwotę"
                            value={amount}                                             // wartość pola jest równa zmiennej "amount", która na starcie ma pustą wartość
                            onChange={({ target }) => setAmount(target.value)}         // przy zmianie wartości funckja przyjmuje wartość wpisywaną przez użytkownika
                        />
                    </label>
                </p>
                <ChooseCurrency
                    currencies={currencies}
                    setCurrency={setCurrency}
                />

                <Buttons
                    countCurrency={countCurrency}
                    result={result}
                    currency={currency}
                    amount={amount}
                    currencies={currencies}
                    setResult={setResult}
                />
                <p>
                    Otrzymasz:<span>&nbsp;&nbsp;</span>
                    <input
                        name="result"
                        className="form__currency"
                        value={result}
                        readOnly
                    />
                </p>
            </fieldset>

        </form>
    )
}

export default Form;