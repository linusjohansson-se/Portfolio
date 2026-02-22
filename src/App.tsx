import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import MainLayout from "./components/templates/MainLayout";

function App() {
  return (
    <MainLayout>
      <div id="home" className="scroll-mt-24"><HomePage /></div>
      <div id="projects" className="scroll-mt-24"><ProjectsPage /></div>
      <div id="about" className="scroll-mt-24"><AboutPage /></div>
    </MainLayout>
  );
}

export default App;
