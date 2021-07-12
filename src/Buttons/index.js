import "./style.css";

const Buttons = ({ countCurrency, result }) => {

    return (
        <div>
            <button className="form__button" onClick={() => console.log(countCurrency(result))}>Przelicz</button>
            <button className="form__button">Wyczyść</button>
        </div >
    )
};

export { Buttons };
