import "./style.css"

const ButtonContainer = ({ hideTable, changeTableText }) => {
    return (
        <div className="buttonContainer">
            <button
                onClick={changeTableText}
                className="buttonContainer__button">{hideTable ? "Zwiń tabele" : "Rozwiń tabele"}
            </button>
        </div >
    )
}

export { ButtonContainer };