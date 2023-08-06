import Image from "next/image";
import React from "react";
import SlickSlider from "react-slick";

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  codeUrl?: string;
}

interface ProjectProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectProps> = ({ projects }) => {
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
    <div className="max-w-lg mx-auto">
      <SlickSlider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-4">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex mt-4 space-x-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Live Demo
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Codebase
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default ProjectCarousel;
