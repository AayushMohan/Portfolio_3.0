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
        <div key={index} className="p-4"></div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
