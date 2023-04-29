import Link from 'next/link';
import classes from './NavBar.module.css';

function NavBar() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>SocialApp</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
