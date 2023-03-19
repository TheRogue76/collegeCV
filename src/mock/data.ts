import { nanoid } from 'nanoid';
import {
  AboutData,
  ContactData,
  FooterData,
  HeaderData,
  HeroData,
  ProjectData,
} from '../interfaces';

// HEAD DATA
export const headData: HeaderData = {
  title: 'Parsa Nasirimehr', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData: HeroData = {
  title: '',
  name: 'Parsa Nasirimehr',
  subtitle: "I'm a software engineer",
  cta: '',
};

// ABOUT DATA
export const aboutData: AboutData = {
  img: 'profile.png',
  paragraphOne:
    'I am a Software Engineer with 4 years of professional experience developing software solutions. I graduated from K.N.T University of Technology with a B.Sc. in Computer Engineering. My main research interests are Software Engineering, Software Validation and Software Evolution.',
  paragraphTwo:
    'Creative and self-motivated Computer Scientist interested in research and implementation. Adequate knowledge of programming languages and frameworks relevant for software engineering and web / mobile development. Committed to working as a team member and collaborating with others.',
  resume: require('../images/CV.pdf'), // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData: ProjectData[] = [
  {
    id: nanoid(),
    img: 'dietdoctor.png',
    title: 'DietDoctor',
    info: 'DietDoctor',
    info2: 'A Dietary app built with RN for iOS and Android, with a focus on metabolic health.',
    url: 'https://www.dietdoctor.com/',
  },
  {
    id: nanoid(),
    img: 'appetit.png',
    title: 'Appetit',
    info: 'Appetit',
    info2:
      'A Workout app built with RN for iOS and Android, with health tracking using Apple Healthkit and Google Fit. Made to connect coaches with their customers and to provide a platform for streaming their workouts',
    url: 'https://www.appetit.fit/',
  },
  {
    id: nanoid(),
    img: 'pacman.png',
    title: 'Pacman Game',
    info: 'Open source',
    info2:
      "Pacman game is on open source game developed in Unity using C# as my bachelor degree's final project and runs on iOS and Android. The game has all the original enemies and is controlled using an on screen navigator",
    repo: 'https://gitlab.com/p.nasirimehr/pac-man',
  },
  {
    id: nanoid(),
    img: 'patogh.png',
    title: 'Patogh Social App',
    info: 'K.N.T.U University of Technology',
    info2:
      'A Social gathering coordinator app built natively for Android as part of my System Analysis and Design course in college. I served as Scrum master, Back-end Developer and DevOps on this project',
    url: 'https://prezi.com/p/bqql2m5-pjjk/patogh/',
  },
  {
    id: nanoid(),
    img: 'xapa.png',
    title: 'Xapa',
    info: 'Xapa',
    info2:
      "A crypto currency wallet app with coin exchange capabilities. On top of developing it's UI, I created the webhook service that connected to bitcoin core for tracking all incoming and outgoing transactions of our wallets",
    url: 'https://xapawallet.com/',
  },
  {
    id: nanoid(),
    img: 'CVHR.jpeg',
    title: 'Computer Vision: Handwriting recognition',
    info: 'Open Source',
    info2:
      'Done as a part of my college curriculum, This project uses OpenCV and Keras and trains two convolutional neural networks for persian handwriting recognition',
    repo: 'https://github.com/TheRogue76/Computer-Vision', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'adobeConnect.png',
    title: 'AdobeConnectExporter',
    info: 'Open source',
    info2:
      "A fork of an adobe connect exporter written in python. Extended it's ability to include more universities and merged into the master branch",
    repo: 'https://github.com/ParsaHejabi/AdobeConnectExporter', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData: ContactData = {
  cta: '',
  btn: '',
  email: 'p.nasirimehr@gmail.com',
};

// FOOTER DATA
export const footerData: FooterData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ParsaNasirimehr',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/parsa-nasirimehr-3547b9168/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TheRogue76',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:p.nasirimehr@gmail.com',
    },
  ],
};
