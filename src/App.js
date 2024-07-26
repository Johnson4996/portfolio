
import './App.css';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Project } from './components/Project';
import projects  from './assets/data/projects.json'

function App() {
  return (
    <div className="App text-gray-700 ">
      <section className="h-screen bg-cover bg-center bg-fixed flex-col items-center justify-center font-bold relative overflow-hidden">
        <NavBar />
        <Hero />
      </section>
      <hr/>
      <section className="pt-10 min-h-screen">
      <div className="mb-10">
          <h1 className="text-3xl font-extrabold ">Projects</h1>
        </div>
        <Project projects={projects}/>
      </section>
      
    </div>
  );
}

export default App;
