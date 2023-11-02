import "./App.css";
import About from "./components/About/about.component";
import { Header } from "./components/Header/header.component";
import { Home } from "./components/Home/home.component";
function App() {
  return (
    <>
      <main>
        <Header />
        <Home />
        <About />
      </main>
    </>
  );
}
export default App;
