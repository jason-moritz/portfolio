import Hubbub from '../assets/hubbub-thumbnail-test.WebP'
import JayWalkin from '../assets/jaywalkin-thumbnail-test.WebP'
import PocketCaddie from '../assets/pocket-caddie-thumbnail-test.WebP'
import JWS from '../assets/jws-thumbnail-test.WebP'

export const projectsArray = [
  {
    id: 'project1',
    title: 'hubbub',
    preview: Hubbub,
    github: 'https://github.com/jason-moritz/hubbub',
    deployed: 'https://hubbub.netlify.app/',
    group: 'Solo project - Blog app',
    description:
      'Instagram/reddit clone with user authentication and associations.',
    stack: ['ruby on rails', 'react js', 'postgresql'],
    localLink: 'project2',
    next: 'More projects',
  },
  {
    id: 'project2',
    title: 'jaywalkin',
    preview: JayWalkin,
    github: 'https://github.com/jason-moritz/jay-walkin',
    deployed: 'https://jaywalkin.netlify.app/',
    group: 'Group project - E-commerce',
    description: 'Online shoe resale with user auth and noSQL database.',
    stack: ['MongoDB', 'Express', 'React JS', 'Node JS'],
    localLink: 'project3',
    next: 'More projects',
  },
  {
    id: 'project3',
    title: 'pocket caddie',
    preview: PocketCaddie,
    github: 'https://github.com/jason-moritz/pocket-caddie',
    deployed: 'https://pocket-caddie.netlify.app/',
    group: 'Solo project - Score Tracker',
    description: 'On-course golf score recorder with club recommendations.',
    stack: ['react js', 'airtable'],
    localLink: 'project4',
    next: 'More projects',
  },
  {
    id: 'project4',
    title: 'JWS',
    preview: JWS,
    github: 'https://github.com/jason-moritz/JWS',
    deployed: 'https://jason-moritz.github.io/JWS/',
    group: 'Solo project - F1 Data Display',
    description:
      'Displays F1 data with driver information utilizing a 3rd party API.',
    stack: ['JavaScript', 'HTML'],
    localLink: 'contact',
    next: 'contact',
  },
]
