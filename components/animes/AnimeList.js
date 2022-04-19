import Anime from './Anime';
import classes from './AnimeList.module.css';

const AnimeList = (props) => {
  return (
    <div className={classes.Container}>
      <ol className={classes.OrderedList}>
        {props.animes.map((anime) => (
          <div key={anime.id} className={classes.ListItem}>
            <Anime anime={anime} />
          </div>
        ))}
      </ol>
    </div>
  );
};

export default AnimeList;
