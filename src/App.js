
import './App.css';
import { Hero } from './sections/Hero';
import { NavBar } from './sections/NavBar';
import { Project } from './sections/Project';
import projects  from './assets/data/projects.json'
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="App text-gray-700 ">
      <section className="h-screen bg-cover bg-center bg-fixed flex-col items-center justify-center font-bold relative overflow-hidden">
        {/* <NavBar /> */}
        <Hero />
      </section>
      <hr/>
      <div className="mb-10 mt-10">
          <h1 className="text-3xl font-extrabold ">Projects</h1>
        </div>
      <section>
        <Project projects={projects}/>
      </section>
      <hr/>
      <section>
        <Contact />
      </section>
      
    </div>
  );
}

export default App;
