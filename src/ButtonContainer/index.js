import "./style.css"

const ButtonContainer = ({ buttonText, changeButtonText }) => {
    return (
        <div className="buttonContainer">
            <button
                onClick={changeButtonText}
                className="buttonContainer__button">{buttonText}</button>
        </div >
    )
}

export { ButtonContainer };