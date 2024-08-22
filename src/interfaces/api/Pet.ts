import PaginatedDataInterface from '@appInterfaces/api/PaginatedData';

interface Timestamp {
  date: string;
  timezone_type: number;
  timezone: string;
}

interface Owner {
  email: string;
  firstName: string;
  lastName: string;
}

interface Pet {
  id: string;
  name: string;
  birthDate: Timestamp;
  race: string;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
  owner: Owner;
}

type PaginatedPetData = PaginatedDataInterface<Pet>;

export default PaginatedPetData;
