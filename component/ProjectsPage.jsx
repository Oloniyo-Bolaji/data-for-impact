import React from "react";
import { client } from "@/src/sanity/client";
import { getProjects } from "@/src/sanity/queries";
import Projects from "./Projects";

const options = { next: { revalidate: 30 } };

const ProjectsPage = async () => {
  const projects = await client.fetch(getProjects, {}, options);

  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
};

export default ProjectsPage;
