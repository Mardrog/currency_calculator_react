import "./style.css";

const Buttons = ({ countCurrency, amount, result }) => {

    return (
        <div>
            <button className="form__button" onClick={() => (countCurrency(result, amount))}>Przelicz</button>
            <button className="form__button">Wyczyść</button>
        </div >
    )
};

export default Buttons;
