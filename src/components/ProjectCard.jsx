function ProjectCard({ title, description, image }) {
  return (
    <article className="project-card">
      <img src={image} alt={title} />

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>

        <button className="btn-primary">
          Ver proyecto
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
