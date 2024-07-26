import React from "react";

export const Project = ({ projects }) => {
    return (
      <div>
        {projects.map((project, idx) => (
          <div key={project.id} className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} w-full h-full mb-10`}>
            <div className="max-w-2xl flex-col gap-5">
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p>{project.description}</p>
              <p>Skills: {project.tags.join(" ")}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };