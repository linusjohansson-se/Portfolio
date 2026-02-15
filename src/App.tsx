import HomePage from "./components/pages/HomePage";
import MainLayout from "./components/templates/MainLayout";

function App() {
  return (
    <MainLayout children={HomePage()} />
  )
}

export default App;
