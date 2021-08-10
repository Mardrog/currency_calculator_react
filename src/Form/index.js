import { Buttons } from "../Buttons";
import { ChooseCurrency } from "../ChooseCurrency";
import { useState } from "react";
import { StyledForm, StyledFieldset, StyledCurrency } from "./styled";


const Form = ({ amount, setAmount, currencies, countResult, result }) => {

    const [currency, setCurrency] = useState(3.8153)

    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult(currency, amount);
        setAmount("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledFieldset >
                <legend>Przelicznik walut</legend>
                <p>
                    <label>
                        Kwota w PLN:<span>&nbsp;&nbsp;</span>
                        <StyledCurrency
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
                    <span>
                        {result !== null ? result.toFixed(2) : ""}
                    </span>
                </p>
            </StyledFieldset>

        </StyledForm>
    );
};

export { Form };