// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import company1_logo from './assets/company_logo/company1_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import jiit_logo from './assets/education_logo/jiit-logo.png';
import school_logo from './assets/education_logo/school-logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     // { name: 'SASS', logo: sassLogo },
    //  { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    //  { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
   //   { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    //  { name: 'GSAP', logo: gsapLogo },
    //  { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
   //   { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    //  { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
    //  { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
   //   { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
    //  { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    //  { name: 'Compass', logo: mcLogo },
    //  { name: 'Vercel', logo: vercelLogo },
    //  { name: 'Netlify', logo: netlifyLogo },
    //  { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: company1_logo,
      role: "Backend Intern",
      company: "Oriserve",
      date: "August 2024 - June 2025",
      desc: "Developed and optimized scalable backend systems integrating Cal, GoHighLevel, HubSpot, and Stripe APIs. Implemented OAuth authentication, subscription management, and Redis caching. Built features like demo campaigns, clone campaigns, and post-call analysis while engineering robust MongoDB aggregation pipelines and Twilio-based SMS fallback for seamless data synchronization and performance optimization.",
      skills: [
        "JavaScript",
        "Node JS",
        "Express Js",
        "MongoDb",
        "Redis",
      ],
    },
   /* {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    }, */
  ];
  
  export const education = [
    {
      id: 0,
      img: jiit_logo,
      school: "Jaypee Institute of Information Technology",
      date: "August 2021 - June 2025",
      grade: "7.7 CGPA",
      desc: [
      "Programming (C++)",
      "Data Structure and Algorithms",
      "Database management system",
      "Object Oriented Programming",
      "Operating system",
      "Computer Networks",
    ],
      degree: "Bachelor of Technology- ECE",
    },
    {
      id: 1,
      img: school_logo,
      school: "Loreto Convent Intermediate College, Lucknow ",
      date: "March 2019 - March 2020",
      grade: "84.2%",
      desc:  [
        "Physics", 
        "Chemistry", 
        "Mathematics",
        "Computer Science ",
    ],
      degree: "ISC, Class 12th ",
    },
    {
      id: 2,
      img: school_logo,
      school: "Loreto Convent Intermediate College, Lucknow",
      date: "March 2017 - March 2018",
      grade: "91.3%",
      desc:  [
        "Science",
        "Mathematics",
        "Social Science",
        "Computer",
    ],
      degree: "ICSE, Class 10th",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Blogging Buzz",
      description:
        "Created a Node.js responsive web application utilizing Express as a framework to handle HTTP requests. It integrates MongoDB database using Mongoose for data modelling and JWT tokens that manage user authentication and authorization, ensuring secure login and registration.The frontend is a React application with Redux for state management and asynchronous operations. It employs async-thunks to handle asynchronous operations and manages state changes based on API responses.Blogging Buzz allows users to create, share, interact with content, and build a community around posts and profiles.",
      image: githubdetLogo,
      tags: ["Redux", "Tailwind CSS", "React.js", "Node.js", "Express.js"," MongoDB", "JavaScript"],
      github: "https://github.com/vagisha312/Blogging-Buzz",
      webapp: "https://www.youtube.com/watch?v=BAkmiMSS9Us&t=3s",
    },
    {
      id: 1,
      title: "Blood Donation",
      description:"Developed a Responsive website using Node.js and Express.js framework with JWT tokens for secure, authenticated, and authorized login and signup.Integrated MongoDB database with Mongoose for structured data storage and management.The frontend is built with React.js, enabling registration for users, organizations, and hospitals interested in blood donation, while individuals in need can easily locate nearby donors or hospitals to facilitate urgent blood transfusions.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/vagisha312/Blood-Donation",
      webapp: "https://github.com/vagisha312/Blood-Donation",
    },
    {
      id: 2,
      title: "ChatBot",
      description:"Created an intelligent chatbot by integrating Python libraries such as PyPDF2, SpaCy, and NumPy along with OpenAI services.Utilized language models for question answering, implemented natural language processing techniques, and applied similarity search and text manipulation algorithms.",
      image: movierecLogo,
      tags: ["Python"],
      github: "https://github.com/vagisha312/ChatBot",
      webapp: "https://github.com/vagisha312/ChatBot",
    },
    {
      id: 3,
      title: "Weather-application",
      description:
        "Built a React.js-based weather application that displays real-time weather conditions based on the user’s current location or city search.Integrated geolocation API to retrieve the user’s position and fetch up-to-date weather data",
      image: npmLogo,
      tags: ["React JS","OpenWeather API"],
      github: "https://github.com/vagisha312/weather-application",
      webapp: "https://github.com/vagisha312/weather-application",
    },
   /* {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    }, */
  ];  