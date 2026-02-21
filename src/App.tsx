import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import MainLayout from "./components/templates/MainLayout";

function App() {
  return (
    <MainLayout>
      <HomePage />
      <ProjectsPage />
      <AboutPage />
    </MainLayout>
  );
}

export default App;
