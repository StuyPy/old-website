import Menu from '../components/Menu';
import UpcomingEvents from '../components/UpcomingEvents';
import Resources from '../components/Resources';
import Footer from '../components/Footer';
import HomeTop from '../components/HomeTop'

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Menu />
      <HomeTop />
      {//<UpcomingEvents />
	  }
      <Resources />
      <Footer />
    </>
  );
}
