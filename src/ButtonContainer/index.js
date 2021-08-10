import { StyledButtonContainer, StyledButton } from "./styled";

const ButtonContainer = ({ hideTable, changeTableText }) => {
    return (
        <StyledButtonContainer>
            <StyledButton
                onClick={changeTableText}
            >
                {hideTable ? "Zwiń tabele" : "Rozwiń tabele"}
            </StyledButton>
        </StyledButtonContainer >
    )
}

export { ButtonContainer };