import "./style.css"

const ButtonContainer = ({ tableButtonText, changeButtonText }) => {
    return (
        <div className="buttonContainer">
            <button
                onClick={() => changeButtonText(tableButtonText)}
                className="buttonContainer__button">{tableButtonText}</button>
        </div >
    )
}

export { ButtonContainer };