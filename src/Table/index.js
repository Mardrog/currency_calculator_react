import { StyledTableContainer, StyledTable, StyledCaption, StyledCell, StyledTableBody } from "./styled";

const Table = ({ hideTable }) => {
    if (hideTable) {
        return (
            <StyledTableContainer>
                <StyledTable>
                    <StyledCaption>Akutalne kursy walut</StyledCaption>
                    <StyledTableBody>
                        <tr>
                            <StyledCell>Nazwa waluty</StyledCell>
                            <StyledCell>Kurs</StyledCell>
                        </tr>
                        <tr>
                            <StyledCell>Dolar amerykański (USD)</StyledCell>
                            <StyledCell>3,8153</StyledCell>
                        </tr>
                        <tr>
                            <StyledCell>Euro (EUR)</StyledCell>
                            <StyledCell>4,5784</StyledCell>
                        </tr>
                        <tr>
                            <StyledCell>Funt szterling (GBP)</StyledCell>
                            <StyledCell>5,2744</StyledCell>
                        </tr>
                    </StyledTableBody>
                </StyledTable>
            </StyledTableContainer>
        );
    };
    return ""
};

export { Table };