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
  img: 'profile.jpg',
  paragraphOne:
    'My name is Parsa Nasirimehr. I am a Software Engineer with 3 years of professional experience developing software solutions. I graduated from K.N.T.U University of Technology with a B.Sc. in Computer Engineering. My main research interests are Software Engineering, Software Validation and Software Evolution.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData: ProjectData[] = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData: ContactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData: FooterData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};
