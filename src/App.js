import Form from "./Form";
import { ButtonContainer } from "./ButtonContainer";
import { Table } from "./Table";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { useState } from "react";

function App() {

  const changeButtonText = (tableButtonText) => tableButtonText === "Zwiń tabele" ? "Rozwiń tabele" : "Zwiń tabele";

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("")
  const [result, setResult] = useState("");

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

  const countCurrency = () => {
    return setResult(currencies[1].value)
  }

  return (
    <Main>
      <Form
        amount={amount}
        setAmount={setAmount}
        currency={currency}
        setCurrency={setCurrency}
        result={result}
        countCurrency={countCurrency}
        setResult={setResult}
        currencies={currencies}
      />
      <ButtonContainer
        changeButtonText={changeButtonText}
        tableButtonText="Zwiń tabele"
      />
      <Table />
      <Footer />
    </Main>

  );
}

export default App;
