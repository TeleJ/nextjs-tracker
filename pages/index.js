import { Fragment } from 'react';

import supabase, { getServiceSupabase } from '../lib/supabase';
import NewAnimeForm from '../components/animes/NewAnimeForm';
import AnimeList from '../components/animes/AnimeList';

export async function getStaticProps() {
  const { data: animes, error } = await supabase.from('animes').select('*');

  if (error) {
    throw new Error(error);
  }

  return {
    props: {
      animes,
    },
  };
}

export default function Home({ animes }) {
  async function addAnimeHandler(enteredAnimeData) {
    console.log(enteredAnimeData);
    const { data: animes, error } = await supabase
      .from('animes')
      .insert([{ title: enteredAnimeData }]);
  }

  return (
    <Fragment>
      <NewAnimeForm onAddAnime={addAnimeHandler} />
      <AnimeList animes={animes} />
    </Fragment>
  );
}
