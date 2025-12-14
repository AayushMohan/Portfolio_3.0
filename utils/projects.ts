// src/projects.ts


export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  gifUrl?: string;
  videoUrl?: string;
  liveUrl?: string;
  codebaseUrl?: string;
  techStack?: string[];
  mediaOrientation?: "landscape" | "portrait";
}

const projects: Project[] = [
  {
    name: 'The News App',

    description: "Mobile-optimized web app for browsing and filtering news from multiple sources, with a clean, performant UI and robust search/filtering.",

    liveUrl: 'https://news-app-sigma-khaki.vercel.app/',
    imageUrl: "https://cdn.sanity.io/images/p31j23cd/production/8ba754197bf8973a5bebd4220605e4f5b6053830-3104x1788.png?w=2000&fit=max&auto=format&dpr=2",
    codebaseUrl: "https://github.com/AayushMohan/news-app",
    techStack: ['nextjs', 'typescript', 'tailwind', 'graphql'],
    mediaOrientation: "landscape",
  },
  {
    name: 'EstateX',
    description:
      'Mobile-first real estate app with clean UI and smooth navigation for discovering property listings.',
    imageUrl:
      'https://cdn.sanity.io/images/nahptg7w/production/f9346827b8706bb798efda0bf4df719f709b2d27-2880x1800.png',
    gifUrl: '/images/logos/estateXS.gif',
    codebaseUrl: 'https://github.com/AayushMohan/estateX',
    techStack: ['react-native', 'typescript', 'appwrite', 'navigation'],
    mediaOrientation: "portrait",
  },
  {
    name: 'OpenSea Clone',
    description: "Explore blockchain assets and NFTs with a clean, responsive UI and smooth interactions.",
    liveUrl: 'https://opensea-blockchain-clone-psi.vercel.app/',
    imageUrl: "https://cdn.sanity.io/images/p31j23cd/production/73257f0b516c4df9a372565178b86b97b9838771-3104x1788.png",
    codebaseUrl: 'https://github.com/AayushMohan/opensea-blockchain-clone',
    techStack: ['nextjs', 'react', 'tailwind', 'sanity'],
    mediaOrientation: "landscape",
  },
  {
    name: 'Deliveroo Clone',
    description:
      'Food delivery app clone with clean UI, smooth flows, and practical navigation built in React Native.',
    // Replace with your static preview image if available
    imageUrl: 'https://cdn.sanity.io/images/nahptg7w/production/1a4448159ef7b2aed53d34554797801f3b11e17b-1022x1800.png',
    // Provide the video asset path placed under /public, e.g., /images/logos/deliveroo.mp4
    videoUrl: '/images/logos/deliveroo.mp4',
    codebaseUrl: 'https://github.com/AayushMohan/deliveroo-clone',
    techStack: ['react-native', 'typescript', 'navigation'],
    mediaOrientation: "portrait",
  }, {
    name: 'Natours Project',
    description: 'Travel agency landing page focused on elegant CSS/SCSS animations and accessible layout.',
    liveUrl: 'https://aayushmohan.github.io/Natours-Project/',
    imageUrl: "https://cdn.sanity.io/images/p31j23cd/production/6aec88fa9ffa63cbf3472d31c89c185115175201-3104x1788.png",
    codebaseUrl: 'https://github.com/AayushMohan/Natours-Project',
    techStack: ['html', 'css', 'scss'],
    mediaOrientation: "landscape",
  },

];

export default projects;
