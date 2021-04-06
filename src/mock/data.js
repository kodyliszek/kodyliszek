import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kodyliszek',
  lang: 'en',
  description: 'Roar!!!',
};

// HERO DATA
export const heroData = {
  title: 'This is a lair of',
  name: 'Kodyliszek',
  subtitle: 'Cunning beast of World Wild Web.',
  cta: 'Enter, if You dare !',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  title: 'Our Story',
  paragraphOne:
    'There is an ancient evil that lurks in the depths of the Internet. It is cunning, feracious and relentless. If you have fallen into his trap and need help, do not be afraid. We are here.',
  paragraphTwo:
    "World Wild Web and all of it's creatures are no secret to us. We tame them, blunt them and subordinate them.",
  paragraphThree: 'This is what we do and we do it well.',
  resume: false,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Project Title',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    info2: '',
    url: '#', // if no url, the button will not show up
    repo: '#', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Project Title',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    info2: '',
    url: '#', // if no url, the button will not show up
    repo: '#', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Project Title',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    info2: '',
    url: '#', // if no url, the button will not show up
    repo: '#', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'kodyliszek@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/kodyliszek/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kodyliszek/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
