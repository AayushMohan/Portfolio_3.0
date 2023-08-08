// src/projects.ts


export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  codebaseUrl?: string;
}

const projects: Project[] = [
  {
    name: 'The News App',

    description: "News App is a mobile-optimized web application that allows users to browse and filter news articles from multiple sources.It is built using Next.js, TypeScript, TailwindCSS, StepZen API, and GraphQL.This project showcases my proficiency in modern web development technologies and my ability to build complex applications with a clean codebase.",

    liveUrl: 'https://news-app-sigma-khaki.vercel.app/',
    imageUrl: "https://cdn.sanity.io/images/p31j23cd/production/8ba754197bf8973a5bebd4220605e4f5b6053830-3104x1788.png?w=2000&fit=max&auto=format&dpr=2",
    codebaseUrl: "https://github.com/AayushMohan/news-app",
  },
  {
    name: 'OpenSea Clone',
    description: "OpenSea Blockchain Clone: Seamlessly explore blockchain assets & NFTs. Crafted using Next.js, React, Tailwind CSS, Web 3, and powered by Sanity CMS. Showcasing my prowess in modern web development, delivering user-centric design and efficient codebase.",
    liveUrl: 'https://opensea-blockchain-clone-psi.vercel.app/',
    imageUrl: "https://cdn.sanity.io/images/p31j23cd/production/73257f0b516c4df9a372565178b86b97b9838771-3104x1788.png",
    codebaseUrl: 'https://github.com/AayushMohan/opensea-blockchain-clone',
  }, {
    name: 'Natours Project',
    description: '',
    liveUrl: 'https://www.example.com/project2',
    imageUrl: "https://cdn.sanity.io/images/p31j23cd/production/8ba754197bf8973a5bebd4220605e4f5b6053830-3104x1788.png?w=2000&fit=max&auto=format&dpr=2",
    codebaseUrl: 'https://github.com/yourusername/project2',
  },
];

export default projects;
