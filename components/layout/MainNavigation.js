import Link from 'next/link';
import { SiReact } from 'react-icons/si';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.Header}>
      <div className={classes.NavBarContainer}>
        <SiReact className={classes.Logo} />
        <div className={`${classes.NavBrand} ${classes.HomeWrapper}`}>
          <Link href="/" exact>
            <a className={classes.Home}>My List</a>
          </Link>
        </div>

        <nav className={classes.Nav}>
          <div className={classes.NavBarContainerRight}>
            <Link href="/login">
              <a className={classes.Login}>
                <div className={classes.LoginText}>Login</div>
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
