import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PetContainer, PetPhoto } from '@appComponents/app/Dashboard/styles/PetListStyled';
import DogIcon from '@appImages/placeholder-dog.avif';

const PetList: React.FC = () => {
  const pets = [
    { id: 1, name: 'Fluffy', breed: 'Dog', age: 3, photo: 'fluffy.jpg' },
    { id: 2, name: 'Whiskers', breed: 'Cat', age: 5, photo: 'whiskers.jpg' },
    { id: 3, name: 'Bubbles', breed: 'Fish', age: 1, photo: 'bubbles.jpg' },
    { id: 4, name: 'Max', breed: 'Dog', age: 2, photo: 'max.jpg' },
    { id: 5, name: 'Smokey', breed: 'Cat', age: 4, photo: 'smokey.jpg' },
    { id: 6, name: 'Nemo', breed: 'Fish', age: 2, photo: 'nemo.jpg' }
  ];

  return (
    <Container>
      <Row>
        {pets.map((pet) => (
          <Col key={pet.id} className="mb-4">
            <PetContainer>
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{pet.breed}</Card.Subtitle>
                <Card.Text>Age: {pet.age}</Card.Text>
                <PetPhoto src={DogIcon} alt={pet.name}></PetPhoto>
              </Card.Body>
            </PetContainer>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PetList;
