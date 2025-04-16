import { faker } from "@faker-js/faker";

export const generatePerson = () => {
    const id = faker.string.uuid();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    const photoUrl = faker.image.personPortrait();

    return {
        id,
        firstName,
        lastName,
        email,
        photoUrl,
    };
};
