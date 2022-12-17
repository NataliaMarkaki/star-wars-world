import { useNavigate } from 'react-router-dom';

import { PersonRequestResult } from '../../services/people/people';

import {
  CardWrapper,
  Description,
  BoldText,
  Title,
  Text,
} from "./Card.styles";

type CardProps = {
  id?: number;
} & PersonRequestResult;

const Card = (props: CardProps) => {
  const navigate = useNavigate();
  if (!props.name) return null;

  return (
    <CardWrapper data-testid={`card-wrapper-${props.id}`} onClick={() => navigate(`/character`, { state: props, })} >
      <Description data-testid={`card-description-${props.id}`}>
        <Title data-testid={`card-name-${props.id}`}>{props.name}</Title>
        <Text data-testid={`card-gender-${props.id}`}> <BoldText>Gender</BoldText> {props.gender}</Text>
        <Text data-testid={`card-home-${props.id}`}><BoldText>Home Planet</BoldText> {props.homeworld}</Text>
      </Description>
    </CardWrapper>
  );
};

export default Card;