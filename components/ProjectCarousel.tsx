import React from "react";
import Slider from "react-slick";

interface ProjectCarouselProps {
  projects: Project[];
}

interface Project {
  name: string;
  description: string;
  image: string;
  liveUrl?: string;
  codebaseUrl?: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings} />
      {projects.map((project, index) => (
        <div key={index} className="p-4">
          <h2>{project.name}</h2>
          <p>{project.description}</p>

          <div className="flex space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noop noreferrer"
                className=""
              >
                Live URL
              </a>
            )}
            {project.codebaseUrl && (
              <a
                href={project.codebaseUrl}
                target="_blank"
                rel="noop noreferrer"
                className=""
              >
                Code Base
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
