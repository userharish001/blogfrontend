import react from '../assets/react.jpg'
import mongo from '../assets/mongo.jpg'
import express from '../assets/express.jpg'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import javascript from '../assets/javascript.jpg'
import node from '../assets/node.jpg'
import bootstrap from '../assets/bootstrap.jpeg'
import tailwind from '../assets/tailwind.png'
import angular from '../assets/angular.png'
import chakhra from '../assets/chakhra.jpeg'
import sass from '../assets/sass.jpeg'
import git from '../assets/git.png'
import github from '../assets/github.png'
import jquery from '../assets/jquery.png'
import vs from '../assets/vs.png'
import postman from '../assets/postman.png'
import three from '../assets/three.png'
import next from '../assets/next.jpeg'
import material from '../assets/material.png'


const data = [
  {
    id: 1,
    title: "React JS",
    desc: "Imagine you're an artist with a blank canvas and a vision of creating a beautiful, interactive masterpiece. But unlike traditional art, this canvas will need to change and update constantly as viewers interact with it. React is a frontend framework that work for web development",
    image: react,
    source: "https://react.dev/"
  },
  {
    id: 2,
    title: "HTML",
    desc: "HTML is like the skeleton of a website. It’s the basic structure that holds all the elements together, allowing you to place text, images, buttons, and more on your canvas. Imagine it as a blueprint for a building where you define each room's purpose.",
    image:html,
    source: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    id: 3,
    title: "CSS",
    desc: "If HTML is the skeleton, CSS is the clothing and makeup that makes your website visually appealing. CSS allows you to add colors, layouts, animations, and style to your elements. It’s like choosing the decor for each room in a house, setting the tone, style, and feel...", 
    image:css,
    source: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    id: 4,
    title: "JavaScript",
    desc: "JavaScript is what brings your webpage to life. With it, you can add interactivity and dynamic behavior to your site. Imagine a building where the lights turn on when you enter, or where a door opens as you approach—JavaScript makes these interactions possible in the digital world..",
    image:javascript,
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    id: 5,
    title: "Tailwind CSS",
    desc: "Tailwind CSS is a utility-first CSS framework that lets you style elements directly by applying classes. Instead of writing custom styles, you simply add classes like 'bg-blue-500' or 'text-center' to elements, giving you a quick, standardized approach to building designs...", 
    image:tailwind,
    source: "https://tailwindcss.com/"
  },
  {
    id: 6,
    title: "Bootstrap",
    desc: "Bootstrap is a powerful CSS framework designed to make building responsive websites faster and easier. It provides a library of pre-styled components like buttons, forms, and grids that adapt well across devices. Imagine Bootstrap as a toolkit that comes with a set of polished, ready-to-use elements for a quicker, professional-looking setup.",
    image:bootstrap,
    source: "https://getbootstrap.com/"
  },
  {
    id: 7,
    title: "Node.js",
    desc: "Node.js allows JavaScript to run on the server side, enabling you to create dynamic, scalable applications. It’s like adding a brain to your server, making it capable of handling logic, processing data, and interacting with databases in real-time. Node.js expands JavaScript's use from frontend scripting to powerful backend operations.",
    image:node,
    source: "https://nodejs.org/"
  },
  {
    id: 8,
    title: "Express.js",
    desc: "Express.js is a minimal, flexible web application framework built on top of Node.js. It simplifies routing, middleware, and request handling, making it easier to manage complex server logic. Think of it as a smart traffic controller for your server, directing requests efficiently and managing responses to ensure smooth communication.",
    image:express,
    source: "https://expressjs.com/"
  },
  {
    id: 9,
    title: "MongoDB",
    desc: "MongoDB is a NoSQL database designed to store data in flexible, JSON-like documents. It’s like a filing system where each document can hold various data types without needing a rigid structure. MongoDB's document-based model makes it highly adaptable and great for..",
    image:mongo,
    source: "https://www.mongodb.com/"
  },
  {
    id: 10,
    title: "Material UI",
    desc: "Material UI is a popular React component library that follows Google’s Material Design principles. It provides a range of customizable components to help developers build attractive and functional UIs quickly.",
    image: material,
    source: "https://mui.com/"
},
{
    id: 11,
    title: "jQuery",
    desc: "jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversal and manipulation, event handling, and animation. It makes JavaScript much easier to use across different web browsers.",
    image: jquery,
    source: "https://jquery.com/"
},
{
    id: 12,
    title: "Angular",
    desc: "Angular is a TypeScript-based open-source web application framework led by Google. It's used for building dynamic single-page applications (SPAs) by providing a structured and scalable environment for frontend development.",
    image: angular,
    source: "https://angular.io/"
},
{
    id: 13,
    title: "Next.js",
    desc: "Next.js is a React framework that allows for server-side rendering, static generation, and building highly performant and optimized web applications. It simplifies complex React setups and enhances SEO and scalability.",
    image: next,
    source: "https://nextjs.org/"
},
{
    id: 14,
    title: "Three.js",
    desc: "Three.js is a powerful JavaScript library for creating 3D graphics in the browser. It provides an easy-to-use framework for rendering and animating 3D models using WebGL, making complex visualizations accessible.",
    image: three,
    source: "https://threejs.org/"
},
{
    id: 15,
    title: "Chakra UI",
    desc: "Chakra UI is a simple, modular, and accessible component library that provides a set of React components to build applications with a focus on flexibility and ease of use, promoting an accessible and aesthetic UI design.",
    image: chakhra,
    source: "https://chakra-ui.com/"
},
{
    id: 16,
    title: "Sass",
    desc: "Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends CSS with powerful features like variables, nesting, and mixins. It helps make CSS more maintainable and enables reusable styles.",
    image: sass,
    source: "https://sass-lang.com/"
},
{
    id: 17,
    title: "Git",
    desc: "Git is a distributed version control system used by developers to track changes in source code. It enables collaboration on projects by managing code revisions, branching, and merging.",
    image: git,
    source: "https://git-scm.com/"
},
{
    id: 18,
    title: "GitHub",
    desc: "GitHub is a web-based platform that hosts Git repositories, allowing developers to collaborate on projects, manage code changes, and maintain version control. It also offers features like issue tracking and project management.",
    image: github,
    source: "https://github.com/"
},
{
    id: 19,
    title: "Visual Studio Code",
    desc: "Visual Studio Code is a powerful, lightweight code editor developed by Microsoft. It offers a range of features including syntax highlighting, debugging, and an integrated terminal, along with support for extensions.",
    image: vs,
    source: "https://code.visualstudio.com/"
},
{
    id: 20,
    title: "Postman",
    desc: "Postman is a popular API development tool that simplifies the process of building, testing, and debugging APIs. It provides a user-friendly interface for sending HTTP requests and analyzing responses.",
    image: postman,
    source: "https://www.postman.com/"
}

];

export default data