import React, { useEffect, useState } from 'react';

import { getPeople, PersonRequestResult } from '../services/people/people';
import Card from '../components/Card/Card';

import { Header, SectionList, Text } from './App.styles';

function App() {
  const [people, setPeople] = useState<PersonRequestResult[]>([]);

  useEffect(() => {
    (async function () {
      const result = await getPeople();
      setPeople(result.results);
    })();

  }, [setPeople]);

  if (!people.length) {
    return <>
      <Header> <h1> Star Wars People Directory </h1></Header>
      <Text>Loading...</Text>
    </>
  }

  return (
    <>
      <Header> <h1> Star Wars People Directory </h1></Header>
      <SectionList>
        {people.map((person, key) => <Card name={person.name} gender={person.gender} id={key} key={key} planet={person.homeworld} />)}
      </SectionList>
    </>
  );
}

export default App;
