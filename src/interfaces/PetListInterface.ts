interface PetsListInterface {
    pets: petInterface[];
    loading: boolean;
    active: string | null;
}

export interface petInterface {
    id: string;
    name: string;
    birthDate: string;
    race: string;
    imageUrl?: string;
    breed: string;
    description: string;
    gender: "M" | "F";
    size: string;
    weight: number;
    dates: { id: string; date: Date }[];
}

export default PetsListInterface;
