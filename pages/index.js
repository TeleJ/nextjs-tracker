import { Fragment, useEffect } from 'react';

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
    revalidate: 1,
  };
}

export default function Home({ animes }) {
  console.log(supabase.auth.user());
  async function addAnimeHandler(enteredAnimeData) {
    console.log(enteredAnimeData);
    const { data: animes, error } = await supabase
      .from('animes')
      .insert([enteredAnimeData]);
  }

  // subscribe to all changes
  const animes = supabase
    .from('animes')
    .on('*', (payload) => {
      console.log('Change received!', payload);
    })
    .subscribe();

  return (
    <Fragment>
      <NewAnimeForm onAddAnime={addAnimeHandler} />
      <AnimeList animes={animes} />
    </Fragment>
  );
}
