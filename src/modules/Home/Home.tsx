import React, { useEffect, useState } from 'react';

import { getPeopleList, PersonRequestResult } from '../../services/people/people';

import Card from '../../components/Card/Card';

import { Header, SectionList, Text } from './Home.styles';

function Home() {
  const [people, setPeople] = useState<PersonRequestResult[]>([]);

  useEffect(() => {
    (async function () {
      const data = await getPeopleList();
      setPeople(data);
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

export default Home;
