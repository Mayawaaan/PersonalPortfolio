import project1 from '../assets/project/StoreApp.png';
import project2 from '../assets/project/Lambo.png';
import project3 from '../assets/project/planets.png';
import project4 from '../assets/project/blobmix.png';

const projectsData = [
  {
    id: 1,
    title: 'StoreApp MongoDB Integration',
    description: 'Implemented a comprehensive data storage solution using MongoDB for a full-stack application.',
    longDescription: 'This project involves designing a NoSQL database schema with MongoDB to efficiently store and retrieve application data. It includes CRUD operations, indexing for performance optimization, and integration with a Node.js backend using Mongoose for seamless data manipulation.',
    technologies: ['MongoDB', 'Mongoose', 'Node.js','Express.js', 'JWT','React','Tailwind', 'Zustand'],
    image: project1,
    link: 'https://project1-gzie.onrender.com/',
  },
  {
    id: 2,
    title: '3D Lamborghini Landing Page',
    description: 'Developed an interactive 3D landing page featuring a Lamborghini model using Three.js and React Three Fiber.',
    longDescription: 'This project showcases a high-performance 3D web experience by integrating a detailed Lamborghini model into a React application. Utilizing React Three Fiber and Drei, it incorporates animations, lighting effects, and user interactions to create an engaging landing page that highlights the car\'s features.',
    technologies: ['Three.js', 'React Three Fiber', 'Drei', 'GLTFLoader', 'React', 'Tailwind CSS'],
    image: project2,
    link: 'https://lambo-reimagine.vercel.app/',
  },
  {
    id: 3,
    title: '3D Landing Page ',
    description: 'Built a dynamic 3D landing page with React, focusing on component reusability and state management.',
    longDescription: 'A modern landing page that leverages React for building reusable components and managing state effectively. The project emphasizes clean code architecture and responsive design principles to ensure a seamless user experience across devices.',
    technologies: [ 'React', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    image: project3,
    link: 'https://the-planets-peach.vercel.app/',
  },
  {
    id: 4,
    title: 'BlobMix - 21 different blob shapes',
    description: 'GLSL project demonstrating 21 unique blob shapes using procedural generation techniques.',
    longDescription: 'BlobMix is a GLSL-based project that showcases 21 distinct blob shapes created through procedural generation. Each shape is rendered in real-time, highlighting the capabilities of GLSL for creating complex geometries and animations. The project serves as a visual exploration of mathematical functions and their applications in computer graphics.',
    technologies: [ 'GLSL', 'Three.js', 'React Three Fiber', 'Drei', 'React', 'Tailwind CSS'],
    image: project4,
    link: 'https://blobmix.vercel.app/',
  },
];

export default projectsData;