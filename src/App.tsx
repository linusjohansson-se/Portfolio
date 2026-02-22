import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import MainLayout from "./components/templates/MainLayout";

function App() {
  return (
    <MainLayout>
      <div id="home"><HomePage /></div>
      <div id="projects"><ProjectsPage /></div>
      <div id="about"><AboutPage /></div>
    </MainLayout>
  );
}

export default App;
