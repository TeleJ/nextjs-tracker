import Card from '../ui/Card';
import classes from './Anime.module.css';
import { useState } from 'react';

const Anime = (props) => {
  const [canDelete, setCanDelete] = useState(false);

  return (
    <div
      className={classes.Container}
      onMouseEnter={() => setCanDelete(true)}
      onMouseLeave={() => setCanDelete(false)}
    >
      <li className={classes.Title}>{props.anime.title}</li>
    </div>
  );
};

export default Anime;
