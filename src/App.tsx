import "./App.css";
import Project from "./components/Project/project.component";
import About from "./components/About/about.component";
import { Header } from "./components/Header/header.component";
import { Home } from "./components/Home/home.component";
import Projects from "./components/Projects/projects.component";
import { IProject, projects } from "./components/model";
import Skills from "./components/Skills/skills.component";
function App() {
  return (
    <>
      <main>
        <Header />
        <Home />
        <About />
        <Projects>
          {projects.map((dataProject: IProject) => {
            return <Project key={dataProject.name} data={dataProject} />;
          })}
        </Projects>
        <Skills />
      </main>
    </>
  );
}
export default App;
