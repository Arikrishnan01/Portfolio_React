import { useContext } from 'react';
import './App.css';
import Header from './components/header/Header';
import { ThemeContext } from './context/ThemeContext';
import Home from './components/home/Home';
import About from './components/about/About';
// import Resume f/rom './components/resume/Resume';
// import Skills from './components/skills/Skills';
// import Projects from './components/projects/Projects';
// import Contacts from './components/contacts/Contacts';

function App() {
  /** access the dark theme from context */
  const { isDarkTheme } = useContext(ThemeContext);

  return (
      <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        <Header />
        <Home />
        <About />
        {/* <Resume /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contacts /> */}
      </div>
  );
}

export default App;
