// import { useState } from "react";

const ChooseCurrency = ({ currency, setCurrency, currencies }) => {

    return (
        < p >
            <label>
                Wybierz walutę:<span>&nbsp;&nbsp;</span>
                <select
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {currencies.map((currency => (
                        <option
                            key={currency.name}
                            value={currency.name}
                        >
                            {currency.name}
                        </option>
                    )))}
                </select>
            </label>
        </p >
    )
}

export { ChooseCurrency };