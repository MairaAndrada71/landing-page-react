function ProjectCard({ title, description, image }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>

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

