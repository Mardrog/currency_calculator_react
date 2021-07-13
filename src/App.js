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
  const [buttonText, setButtonText] = useState("Zwiń tabele");

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
    setResult(amount / currencies[1].value)
  }

  const changeButtonText = () => {
    buttonText === "Zwiń tabele" ? setButtonText("Rozwiń tabele") : setButtonText("Zwiń tabele")
  };

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
        buttonText={buttonText}
        changeButtonText={changeButtonText}

      />
      <Table
        buttonText={buttonText}
      />
      <Footer />
    </Main>

  );
}

export default App;
