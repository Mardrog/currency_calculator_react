import { useState } from "react";

const ChooseCurrency = ({ currency, setCurrency, currencies }) => {

    return (
        < p >
            <label>
                Wybierz walutę:<span>&nbsp;&nbsp;</span>
                <select
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                </select>
            </label>
        </p >
    )
}

export default ChooseCurrency;