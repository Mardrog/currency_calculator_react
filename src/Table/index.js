import "./style.css";

const Table = () => {
    return (
        <div className="tableContainer">
            <table className="tableContainer__table">
                <caption className="tableContainer__caption">Akutalne kursy walut</caption>
                <tbody className="tableContainer__tableBody">
                    <tr>
                        <th className="tableContainer__cell" scope="col">Nazwa waluty</th>
                        <th className="tableContainer__cell" scope="col">Kurs</th>
                    </tr>
                    <tr>
                        <td className="tableContainer__cell">Dolar amerykański (USD)</td>
                        <td className="tableContainer__cell">3,8153</td>
                    </tr>
                    <tr>
                        <td className="tableContainer__cell">Euro (EUR)</td>
                        <td className="tableContainer__cell">4,5784</td>
                    </tr>
                    <tr>
                        <td className="tableContainer__cell">Funt szterling (GBP)</td>
                        <td className="tableContainer__cell">5,2744</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export { Table };