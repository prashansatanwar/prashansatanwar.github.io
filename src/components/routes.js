import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const routes = [
    {
        index: true,
        label: 'Home',
        path: '/',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Resume',
        path: '/resume',
    },
    {
        label: 'Projects',
        path: '/projects',
    },
    {
        label: 'Contact',
        path: '/contact',
    },
];

export const social_links = [
    {
        label:'Github',
        path:'https://github.com/prashansatanwar',
        icon:faGithub,
    },
    {
        label:'LinkedIn',
        path:'https://www.linkedin.com/in/prashansa-tanwar/',
        icon: faLinkedinIn,
    },
    {
        label:'Instagram',
        path:'https://www.instagram.com/ps_palette/',
        icon: faInstagram,
    },
    {
        label: 'Twitter',
        path: 'https://twitter.com/prashansatanwar',
        icon: faTwitter,
    },
    {
        label:'Mail',
        path:'mailto:prashansatanwar@gmail.com',
        icon: faEnvelope,
    },
    {
        index: true,
        label:'Download',
        path:'Resume.pdf',
        icon: faDownload,
    },
];