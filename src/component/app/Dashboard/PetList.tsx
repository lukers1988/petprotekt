import React, { useEffect } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import {
  PetContainer,
  PetPhoto,
  PetColumn
} from '@appComponents/app/Dashboard/styles/PetListStyled';
import customAxios from '@appConfig/customAxios';
import { path } from 'ramda';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { getAllPets, startLoading } from '@appStore/PetsReducer';
import { RootStateType } from '@appStore/store';
import { useDispatch, useSelector } from 'react-redux';
import PetPhotoPlaceholders from '@appComponents/app/Dashboard/data/PetPhotoPlaceholders';
import PetResponseInterface from '@appInterfaces/api/Pet';

const PetList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const petList = useSelector((state: RootStateType) => path(['petList', 'pets'], state));

  const getPetsList = async () => {
    dispatch(startLoading());

    const response = await customAxios.get<PetResponseInterface>('/pet');
    const receivedList = path(['data', 'data'], response);

    dispatch(
      getAllPets(
        receivedList.map((pet) => ({
          id: pet.id,
          race: pet.race,
          name: pet.name,
          birthDate:
            moment().diff(new Date(pet.birthDate.date), 'years', false) < 1
              ? moment().diff(new Date(pet.birthDate.date), 'months', false) < 1
                ? moment().diff(new Date(pet.birthDate.date), 'days', false) +
                  ` ${t('common:days')}`
                : moment().diff(new Date(pet.birthDate.date), 'months', false) +
                  ` ${t('common:months')}`
              : moment().diff(new Date(pet.birthDate.date), 'years', false) +
                ` ${t('common:years')}`
        }))
      )
    );
  };

  useEffect(() => {
    getPetsList();
  }, []);

  return (
    <Container>
      <Row>
        {petList.map((pet) => (
          <PetColumn key={pet.id}>
            <PetContainer>
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {t(`petAddition:${pet.race}`)}
                </Card.Subtitle>
                <Card.Text>{`${t('petAddition:age')} ${pet.birthDate}`}</Card.Text>
                <PetPhoto
                  src={PetPhotoPlaceholders[pet.race as keyof typeof PetPhotoPlaceholders]}
                  alt={pet.name}
                ></PetPhoto>
              </Card.Body>
            </PetContainer>
          </PetColumn>
        ))}
      </Row>
    </Container>
  );
};

export default PetList;
