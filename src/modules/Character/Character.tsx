import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getFilms } from '../../services/films/films';

import { Header, SectionList, Text, BoldText, FilmList } from './Character.styles';

function Character() {
  const [films, setFilms] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    (async function () {
      const data = await getFilms({ urls: location.state.films });
      setFilms(data.films as string[]);
    })();

  }, [setFilms, location.state.films]);

  return (
    <>
      <Header data-test-id="character-header"> <h1> {location.state.name} </h1></Header>
      <SectionList data-test-id="character-body">
        <BoldText> Hair Colour </BoldText>
        <Text> {location.state.hair_color} </Text>

        <BoldText> Eye colour </BoldText>
        <Text> {location.state.eye_color} </Text>

        <BoldText> Gender </BoldText>
        <Text> {location.state.gender} </Text>

        <BoldText> Home Planet </BoldText>
        <Text> {location.state.homeworld} </Text>

        <BoldText>Films</BoldText>
        <FilmList>
          {films.map((film, key) => <li key={key}> {film} </li>)}
        </FilmList>
      </SectionList>
    </>
  );
}

export default Character;
