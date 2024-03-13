import AboutMe from "./pages/about-me/AboutMe.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import WorkHistory from "./pages/work-history/WorkHistory.tsx";
import NameLogo from "./components/ui/NameLogo.tsx";

function App() {
  return (
    <>
      <NameLogo></NameLogo>
      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <WorkHistory></WorkHistory>
      <Contact></Contact>
    </>
  );
}

export default App;
