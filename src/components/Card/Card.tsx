import {
  CardWrapper,
  Description,
  BoldText,
  Title,
  Text,
} from "./Card.styles";

interface CardProps {
  name?: string;
  gender?: string;
  planet?: string;
  id?: number;
};

const Card = ({ name, gender, planet, id }: CardProps) => {
  if (!name) return null;

  return (
    <CardWrapper data-testid={`card-wrapper-${id}`}>
      <Description data-testid={`card-description-${id}`}>
        <Title data-testid={`card-name-${id}`}>{name}</Title>
        <Text data-testid={`card-gender-${id}`}> <BoldText>Gender</BoldText> {gender}</Text>
        <Text data-testid={`card-home-${id}`}><BoldText>Home Planet</BoldText> {planet}</Text>
      </Description>
    </CardWrapper>
  );
};

export default Card;