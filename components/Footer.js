import Image from 'next/image';
import Link from 'next/link';

import discordLogo from '../public/images/icons/discord.png';
import stuyActLogo from '../public/images/icons/stuyact.png';
import instagramLogo from '../public/images/icons/instagram.png';

export default function Footer() {
  const date = new Date();

  return (
    <div className="container-fluid main-bg py-4 text-white text-center">
      <div className="row">
        <div className="container">
          <a className="p-1" href="https://discord.gg/3kDUYgZGfQ" target="_blank" rel="noopener noreferrer">
            <Image className="" src={discordLogo} alt="Discord" width="40" height="40" />
          </a>
          <a className="p-1" href="https://stuyactivities.org/stuypy" target="_blank" rel="noopener noreferrer">
          <Image className="" src={stuyActLogo} alt="Stuy Activites" width="40" height="40" />
          </a>
          <a className="p-1" href="https://www.instagram.com/stuypy/" target="_blank" rel="noopener noreferrer">
          <Image className="" src={instagramLogo} alt="Instagram" width="40" height="40" />
          </a>
        </div>
      </div>
      <div className="container">
        <a className="text-center">&copy; {date.getFullYear()} StuyPy. All rights reserved.</a>
      </div>
    </div>
  );
}
