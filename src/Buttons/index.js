import "./style.css";

const Buttons = ({ countCurrency, result, amount }) => {

    return (
        <div>
            <button className="form__button" onClick={() => console.log(countCurrency(result, amount))}>Przelicz</button>
            <button className="form__button">Wyczyść</button>
        </div >
    )
};

export { Buttons };
