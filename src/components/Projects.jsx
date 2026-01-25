import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

function Projects() {
  return (
    <div className="container">
      <h2>Proyectos</h2>

      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
