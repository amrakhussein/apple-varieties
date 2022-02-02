import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const socials = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/amromoorie',
    icon: <FontAwesomeIcon size="lg" icon={faTwitter} />,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/amromoorie',
    icon: <FontAwesomeIcon size="lg" icon={faInstagram} />,
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/amromoorie',
    icon: <FontAwesomeIcon size="lg" icon={faLinkedin} />,
  },
  {
    name: 'Github',
    link: 'https://github.com/amromoorie',
    icon: <FontAwesomeIcon size="lg" icon={faGithub} />,
  },
];

export default function Socials() {
  return (
    <>
      <div className="flex flex-row m-1 space-x-6">
        {socials.map((item) => (
          <a key={item.name} href={item.link} rel="noopener noreferrer" target="_blank" className="list-none hover:hue-rotate-90">
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
}
