import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/images/StuyPyTransparent.png'

export default function Menu() {
  return (
    <div className="container fixed-top">
    <nav className="navbar navbar-expand-md navbar-light">
      <Image src={logo} alt="StuyPy Logo" width="60" height="60" />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#toggleMobileMenu"
        aria-controls="toggleMobileMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="toggleMobileMenu">
        <ul className="navbar-nav ms-auto text-center">
          <li>
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li>
            <Link href="pages/about">
              <a className="nav-link">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="pages/meetings">
              <a className="nav-link">Meetings</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>);
}
