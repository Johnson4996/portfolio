export const Project = ({ projects }) => {
  return (
    <div id="projects" className="flex flex-col items-center">
      {projects.map((project, idx) => (
        <div
          key={project.id}
          className={`flex w-3/4 h-96 mb-10 items-center shadow-lg rounded-lg gap-16`}
        >
          <div className="w-58 h-full flex-shrink-0 object-bottom p-3">
            <img src={project.image} alt={project.name} className="w-72 h-full object-cover object-top" />
          </div>

          <div className="max-w-2xl flex-col gap-5 p-5">
            <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
            <p>{project.description}</p>
            <p className="flex gap-5 mt-3">{project.tags.map((tag) => <span className="text-green-700 ">{tag}</span>)}</p>
            <div className="flex gap-3 mt-5 w-full">
              
                <a href={project.links.github} className="bg-github p-2 w-32 text-center rounded-lg shadow-md hover:bg-github-light hover:-translate-y-0.5">GitHub</a>
               { project.links.demo ? <a href={project.links.demo} className="bg-demo p-2 w-32 text-center rounded-lg shadow-md hover:bg-demo-light hover:-translate-y-0.5">Demo</a>: null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
