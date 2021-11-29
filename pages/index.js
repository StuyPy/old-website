import Menu from '../components/Menu';
import UpcomingEvents from '../components/UpcomingEvents';
import Resources from '../components/Resources';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>StuyPy</h1>
      </main>

      <UpcomingEvents />
      <Resources />

      <Footer />
    </>
  );
}
