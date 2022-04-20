import { useRef, useState } from 'react';
import { getServiceSupabase } from '../../lib/supabase';

import Card from '../ui/Card';
import classes from './NewAnimeForm.module.css';

const NewAnimeForm = (props) => {
  const [newAnime, setNewAnime] = useState('');

  const titleInputRef = useRef();

  const handleInputChange = (event) => {
    setNewAnime(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;

    const animeData = {
      title: enteredTitle,
    };

    props.onAddAnime(animeData);
    setNewAnime('');
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Anime Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            placeholder="Enter Title Here:"
            onChange={handleInputChange}
            value={newAnime}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Anime</button>
        </div>
      </form>
    </Card>
  );
};

export default NewAnimeForm;
