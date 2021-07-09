import Form from "./Form";
import ButtonContainer from "./ButtonContainer";
import Table from "./Table";
import Footer from "./Footer";
import Main from "./Main";

function App() {

  const changeButtonText = (tableButtonText) => tableButtonText === "Zwiń tabele" ? "Rozwiń tabele" : "Zwiń tabele";

  return (
    <Main>
      <Form />
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
