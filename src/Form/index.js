import "./style.css";
import { Buttons } from "../Buttons";
import { ChooseCurrency } from "../ChooseCurrency";
import { useState } from "react";


const Form = ({ amount, setAmount, currencies, countResult, result }) => {

    const [currency, setCurrency] = useState(3.8153)

    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult(currency, amount);
        setAmount("");
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
                    currency={currency}
                />

                <Buttons />
                <p>
                    Otrzymasz:<span>&nbsp;&nbsp;</span>
                    <input
                        name="result"
                        className="form__currency"
                        readOnly
                        value={result.toFixed(2)}
                    />
                </p>
            </fieldset>

        </form>
    )
}

export { Form };