import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import MainLayout from "./components/templates/MainLayout";

function App() {
  return (
    <MainLayout>
      <HomePage />
      <AboutPage />
    </MainLayout>
  );
}

export default App;
