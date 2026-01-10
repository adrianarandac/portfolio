import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { engineeringProjects } from "../data/engineeringProjects";

type EngineeringProjectsSectionProps = {
  initialSlug?: string;
  showSelector?: boolean;
  heading?: string;
  titleLevel?: "h1" | "h2" | "h3";
  compact?: boolean;
};

const EngineeringProjectsSection = ({
  initialSlug,
  showSelector = true,
  heading,
  titleLevel = "h2",
  compact = false,
}: EngineeringProjectsSectionProps) => {
  const [active, setActive] = useState(() => {
    if (initialSlug && engineeringProjects.some((project) => project.slug === initialSlug)) {
      return initialSlug;
    }
    return engineeringProjects[0]?.slug ?? "";
  });
  const [imageIndexes, setImageIndexes] = useState(() =>
    engineeringProjects.reduce<Record<string, number>>((acc, project) => {
      acc[project.slug] = 0;
      return acc;
    }, {})
  );

  const activeProject = useMemo(
    () => engineeringProjects.find((project) => project.slug === active) ?? engineeringProjects[0],
    [active]
  );

  if (!activeProject) return null;

  const TitleTag = titleLevel;
  const images = activeProject.images ?? [];
  const hasImages = images.length > 0;
  const currentImageIndex = imageIndexes[activeProject.slug] ?? 0;

  const handleCycle = (direction: "next" | "prev") => {
    if (!hasImages || images.length <= 1) return;
    setImageIndexes((prev) => {
      const current = prev[activeProject.slug] ?? 0;
      const total = images.length;
      const nextIndex = direction === "next" ? (current + 1) % total : (current - 1 + total) % total;
      return { ...prev, [activeProject.slug]: nextIndex };
    });
  };

  return (
    <section className="section-block stack">
      {heading && <h2>{heading}</h2>}
      {showSelector && (
        <div role="tablist" aria-label="Projects" className="projects-selector">
          {engineeringProjects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              role="tab"
              aria-selected={project.slug === active}
              className={`projects-selector-button ${project.slug === active ? "active" : ""}`}
              onClick={() => setActive(project.slug)}
            >
              <span className="projects-selector-index">{String(index + 1).padStart(2, "0")}</span>
              <span>{project.label}</span>
            </button>
          ))}
        </div>
      )}

      <section aria-live="polite" className={`project-stage ${compact ? "project-stage--compact" : ""}`}>
        <div className="project-meta">
          <p className="eyebrow">{activeProject.eyebrow}</p>
          <TitleTag>{activeProject.title}</TitleTag>
          <p className="muted">{activeProject.description}</p>
          <div className="project-stack">
            <p className="small-label">Stack</p>
            <p>{activeProject.stack}</p>
          </div>
          <div className="project-links">
            <Link href={activeProject.source} target="_blank" rel="noreferrer">
              Source
            </Link>
            <Link href={activeProject.live} target="_blank" rel="noreferrer">
              Live
            </Link>
          </div>
        </div>
        <figure className="project-visual">
          {hasImages && (
            <Image alt={`${activeProject.label} interface`} src={images[currentImageIndex]} className="project-visual-image" />
          )}
          {hasImages && images.length > 1 && (
            <div className="project-controls">
              <button type="button" onClick={() => handleCycle("prev")} aria-label="View previous screenshot">
                {"<"}
              </button>
              <span className="small-label">
                {currentImageIndex + 1}/{images.length}
              </span>
              <button type="button" onClick={() => handleCycle("next")} aria-label="View next screenshot">
                {">"}
              </button>
            </div>
          )}
        </figure>
      </section>
    </section>
  );
};

export default EngineeringProjectsSection;
