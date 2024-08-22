interface PetsListInterface {
  pets: petInterface[];
  loading: boolean;
}

export interface petInterface {
  id: string;
  name: string;
  birthDate: string;
  race: string;
}

export default PetsListInterface;
