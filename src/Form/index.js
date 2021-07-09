import "./style.css";
import Buttons from "../Buttons";
import { useState } from "react";

const Form = () => {

    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");

    const onFormSubmit = (event) => {                                                 //zapobieganie wysłania formularza
        event.preventDefault();
    };

    const countCurrency = (result, amount) => {
        return setResult((result = amount / 4.5784).toFixed(2));
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form_legend">Przelicznik walut</legend>
                <p>
                    <label className="form__label">
                        Kwota w PLN:
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

                <Buttons countCurrency={countCurrency} result={result} amount={amount} />
                <p>
                    Kwota w EUR :
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