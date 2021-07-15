import Form from "./Form";
import { ButtonContainer } from "./ButtonContainer";
import { Table } from "./Table";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { useState } from "react";

function App() {

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("")
  const [result, setResult] = useState("");
  const [hideTable, setHideTable] = useState(true);

  const currencies = [
    {
      name: "USD",
      value: 3.8153,
    },
    {
      name: "EUR",
      value: 4.5784,
    },
    {
      name: "GBP",
      value: 5.2744,
    },
  ];

  const changeTableText = () => {
    setHideTable(!hideTable)
  };

  return (
    <Main>
      <Form
        amount={amount}
        setAmount={setAmount}
        currency={currency}
        setCurrency={setCurrency}
        result={result}
        setResult={setResult}
        currencies={currencies}
      />
      <ButtonContainer
        hideTable={hideTable}
        changeTableText={changeTableText}
      />
      <Table
        hideTable={hideTable}

      />
      <Footer />
    </Main>

  );
}

export default App;
