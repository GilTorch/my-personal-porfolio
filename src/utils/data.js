import BackendDevImage from '../../public/images/skill-cards/backend.jpg'
import MobileDevImage from '../../public/images/skill-cards/mobile.jpg'
import WebDevImage from '../../public/images/skill-cards/web.jpg'
import OtherImage from '../../public/images/skill-cards/other.jpg'

import HaitianTelevisionNetworkSVG from '../../public/svg/haitiantelevisionnetwork.svg'
import KayRapidSVG from '../../public/svg/kayrapid.svg'
import MetFeyVetSVG from '../../public/svg/metfeyvet.svg'
import ScriptoRerumSVG from '../../public/svg/scriptorerum.svg'
import SmartPatientSVG from '../../public/svg/smartpatient.svg'
import ToThePointSVG from '../../public/svg/tothepoint.svg'
import FreeCodeCampSVG from '../../public/svg/freecodecamp.svg'
import FlatironSchoolSVG from '../../public/svg/flatironschool.svg'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export const allProjectDetails = [
    {
      title: "Smart Patient",
      slug: 'smartpatient',
      description: "Smart Patient is a health app for patients. It allow them to manage appointments with doctors and the prescriptions given by them.",
      duration: "1 year",
      roles: [
        {
          label: "Tech Stack",
          description: "React Native, Expo, React Navigation, Redux, Typescript",
        },
        {
          label: "React Native",
          description: "I'm the sole mobile developer in this project. I worked with a backend team"
        },
      ],
      outcome: "This project is ongoing"
    },
    {
      title: "ScriptoRerum",
      slug: "scriptorerum",
      description: "ScriptoRerum is a collaborative story-telling mobile app. The goal of the game is to narrate a story together and each participant would continue the story turn by turn. Once stories and other document types are completed, they will be published on the app’s own library. ",
      duration: "3 years",
      outcome: "The project is availabale on PlayStore under the same name",
      roles: [
        {
          label: "Tech Stack",
          description: "Javascript, React Native, React Navigation, Redux, Node JS, Express JS, MongoDB,"
        },
        {
          label: "Leadership",
          description: "I assigned tasks and managed them through ClickUp"
        },
        {
          label: "Full Stack Mobile Developer",
          description: "I not only worked on the mobile side I also worked on the Node JS and Express backend"
        },
      ],
    },
    {
      title: "Kay Rapid",
      slug: 'kayrapid',
      description: "Kay Rapid, is my first \"serious\" React/React Native project. It started as an idea that sparked in my head while I was looking for appartment to rent in Port-au-Prince, Haïti. Anybody living there knows how hard it is in the area. The population mostly speaks french and creole. I wanted to create an Haitian solution to an Haitian problem. So I gathered a team and we brainstorm for a long time to try to create the ideal product. Eventually, we managed to create an unfinished MVP with the trending tech at the time . The team that I gathered consisted in two developers and I managed to wear multiple hats in this project:",
      duration: "1 year",
      roles: [
        {
          label: "Tech Stack",
          description: "React Native, Apollo Client, React Navigation, GraphQL Yoga, Node JS, Express, Prisma"
        },
        {
          label: "Leadership",
          description: "Being the one that came up with the idea, I became the de factor leader. I basically planned the product meetings and led the standups"
        },
        {
            label: "UX/UI Designer",
            description: "I researched and created the design through Figma"
        },
        {
          label: "Full Stack Web and Mobile Developer",
          description: "I worked as a React Native developer and also touched the backend when necessary"
        },
      ],
      outcome: "The project had to stop because of lack of funding. I also lended my first full-time Full Stack Web and Mobile Developer job the same year."
    },
    {
      title: "Mèt Fèy Vèt",
      slug: 'metfeyvet',
      description: "Met Fey Vet, is a portal for a local activist and politician from Port-au-Prince Haiti. It allow him to share his ideas and welcome public opinion through forums. Also, it gives him the ability to start facebook live",
      duration: "1 year",
      roles: [
        {
          label: "Tech Stack",
          description: "Ruby on Rails, Next JS, Material UI"
        },
        {
          label: "Full Stack Web Developer",
          description: "Being the one that came up with the idea, I became the de factor leader. I basically planned the product meetings and led the standups"
        },
      ],
      outcome: "The whole UI and the livestream feature was completed. AFter "
    },
    {
      title: "Kay Rapid",
      slug: 'kayrapid',
      description: "Kay Rapid, is my first \"serious\" React/React Native project. It started as an idea that sparked in my head while I was looking for appartment to rent in Port-au-Prince, Haïti. Anybody living there knows how hard it is in the area. The population mostly speaks french and creole. I wanted to create an Haitian solution to an Haitian problem. So I gathered a team and we brainstorm for a long time to try to create the ideal product. Eventually, we managed to create an unfinished MVP with the trending tech at the time . The team that I gathered consisted in two developers and I managed to wear multiple hats in this project:",
      duration: "1 year",
      roles: [
        {
          label: "Tech Stack",
          description: "React Native, Apollo Client, React Navigation, GraphQL Yoga, Node JS, Express, Prisma"
        },
        {
          label: "Leadership",
          description: "Being the one that came up with the idea, I became the de factor leader. I basically planned the product meetings and led the standups"
        },
        {
          label: "Full Stack Web and Mobile Developer",
          description: "I worked as a React Native developer and also touched the backend when necessary"
        },
      ],
      outcome: "The project had to stop because of lack of funding. I also lended my first full-time Full Stack Web and Mobile Developer job the same year."
    },
    {
      title: "Mèt Fèy Vèt",
      slug: 'metfeyvet',
      description: "Met Fey Vet, is a portal for a local activist and politician from Port-au-Prince Haiti. It allow him to share his ideas and welcome public opinion through forums. Also, it gives him the ability to start facebook live",
      duration: "1 year",
      roles: [
        {
          label: "Tech Stack",
          description: "Ruby on Rails, Next JS, Material UI"
        },
        {
          label: "Full Stack Web Developer",
          description: "Being the one that came up with the idea, I became the de factor leader. I basically planned the product meetings and led the standups"
        },
      ],
      outcome: "The whole UI and the livestream feature was completed. AFter "
    },
    {
      title: "To The Point",
      slug: 'tothepoint',
      description: "ToThePoint is a social network, a website and a mobile app. It allows students to post PHOTO, GIF, VIDEO with a description and related to a school subject. I features a a Home Feed that list all of the recent post, a discover section where you can find a post by subject, a real time message chat and a profile section.",
      duration: "3 months",
      roles: [
        {
          label: "Tech Stack",
          description: "React Native, React Native Web, Expo, Apollo Client, React Navigation, Redux, Socket.io, Node JS, Express JS, Sequelize, PostgreSQL"
        },
        {
          label: "Leadership",
          description: "I was in charge of creating the tasks, assigning them and monitoring daily stand ups"
        },
        {
          label: "Database Designer",
          description: "I created the database schema from client specifications",
        },
        {
          label: "Full Stack Web and Mobile Developer",
          description: "I worked both on the backend and the frontend on the project. We created both the web app and the mobile app with Expo within the same codebase with React Native Web."
        },
      ],
      outcome: "We presented the mobile app to the client and they were satisfied",
    },
    {
      title: "Haitian Television Network",
      slug: 'haitiantelevisionnetwork',
      description: "Haitian television network is a youtube-like website that allow its users to post videos and watch them. The user access the website after choosing a paid plan.",
      duration: "1 year",
      roles: [
        {
          label: "Tech Stack",
          description: "Ruby on Rails, React JS, Redux"
        },
        {
            label: "UX/UI Designer",
            description: "I researched and created the design through Figma"
        },
        {
          label: "Database Designer",
          description: "I created the database schema from the client specificatoins"
        },
        {
          label: "Full Stack Web Developer",
          description: "I worked both on the backend and the frontend sides. I was the sole programmer of this project"
        },
      ],
      outcome: "The project was presented multiple times to the client."
    },
  
  ]
  
  export const skillsData = [
    {
      category: "Web Skills",
      backgroundImage: WebDevImage ,
      subCategories: [
        {
          title: "Language(s) and Framework(s)",
          skills: [
            "Javascript", "NextJS", "ReactJS"
          ]
        },
        {
          title: "State Management",
          skills: [
            "Redux.js, React Context, Apollo Client"
          ]
        },
        {
          title: "Navigation",
          skills: [
            "React Router Dom"
          ]
        },
        {
          title: "Design System",
          skills: [
            "Boostrap, Material UI"
          ]
        },
        {
          title: "Unit Testing",
          skills: [
            "Jest, React Testing Library, React Test Renderer"
          ]
        }, 
      ]
    },
    {
      category: "Mobile Development Skills",
      backgroundImage: MobileDevImage,
      subCategories: [
        {
          title: "Language(s) and Framework(s)",
          skills: [
            "React Native", "Expo", "Swift"
          ]
        },
        {
          title: "State Management",
          skills: [
            "Redux.js, React Context, Apollo Client"
          ]
        },
        {
          title: "Navigation",
          skills: [
            "React Navigation"
          ]
        },
        {
          title: "Design System",
          skills: [
            "React Native Paper, Native Base"
          ]
        },
        {
          title: "Unit Testing",
          skills: [
            "Jest, React Native Testing Library, React Test Renderer"
          ]
        }, 
      ]
    },
    {
      category: "Backend Skills",
      backgroundImage: BackendDevImage,
      subCategories: [
        {
          title: "Language(s) and Framework(s)",
          skills: [
            "Javascript", "Ruby", "Ruby on Rails", "Node JS", "Express JS"
          ]
        },
        {
          title: "Web Services Architectures",
          skills: [
            "REST, GraphQL, SOAP"
          ]
        },
        {
          title: "Databases",
          skills: [
            "MySQL, PostgreSQL, MongoDB"
          ]
        },
        {
          title: "Deployment",
          skills: [
            "Heroku, Digital Ocean"
          ]
        },
      ]
    },
    {
      category: "Other Skills",
      backgroundImage: OtherImage,
      subCategories: [
        {
          title: "Graphic Design Tools",
          skills: [
            "Adobe Photoshop, Adobe Illustrator"
          ]
        },
        {
          title: "UX/UI",
          skills: [
            "Figma"
          ]
        },
        {
          title: "Project Management Tools",
          skills: [
            "Clickup, JIRA"
          ]
        },
        {
          title: "Project Management Framework",
          skills: [
            "SCRUM"
          ]
        },
        {
          title: "Version Control",
          skills: [
            "Git / Github"
          ]
        }, 
        {
          title: "CI / CD",
          skills: [
            "Github Actions"
          ]
        }, 
      ]
    },
  ]
  
  
  export const projects = [
    {
      illustration: <SmartPatientSVG />,
      title: "Smart Patient",
      slug: "smartpatient",
      caption: "a medical app"
    },
    {
      illustration: <ScriptoRerumSVG />,
      title: "ScriptoRerum",
      slug: "scriptorerum",
      caption: "a mobile app for writers"
    },
    {
      illustration: <MetFeyVetSVG />,
      title: "Mèt Fèy Vèt",
      slug: "metfeyvet",
      caption: "a portal for a local politician and activist in Haiti"
    },
    {
      illustration: <HaitianTelevisionNetworkSVG />,
      title: "Haitian Television Network",
      slug: "haitiantelevisionnetwork",
      caption: "a video platform"
    },
    {
      illustration: <KayRapidSVG />,
      title: "Kay Rapid",
      slug: "kayrapid",
      caption: "a housing app that help finding a house to rent/buy in Haiti"
    },
    {
      illustration: <ToThePointSVG />,
      title: "ToThePoint",
      slug: "tothepoint",
      caption: "an social media for students"
    },
  ]
  
  export const certifications = [
    {
      illustration: <FreeCodeCampSVG />,
      backgroundColor: "#2E6338",
      title: "FreeCodeCamp Front End",
    },
    {
      backgroundColor: "#11ABDF",
      illustration: <FlatironSchoolSVG />,
      title: "Flatiron Full Stack Web ",
    }
  ]

  export const socials = [
    {
      illustration: <LinkedInIcon htmlColor='#EFC900' fontSize="large" />,
      link: 'https://www.linkedin.com/in/gilbert-torchon-22a9a1a4/',
    },
    {
      illustration: <GitHubIcon htmlColor='#EFC900' fontSize="large"/>,
      link: 'https://github.com/GilTorch',
    },
    {
      illustration: <TwitterIcon htmlColor='#EFC900' fontSize="large"/>,
      link: 'https://twitter.com/gilbert_4_real',
    },
  ]