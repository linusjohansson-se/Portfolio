import Button from "./components/atoms/Button";
import Card from "./components/molecules/Card";
import MainLayout from "./components/templates/MainLayout";

function App() {
  return (
    <MainLayout>
      <Button children={<h1>Under construction</h1>} />
    </MainLayout>
  )
}

export default App;
