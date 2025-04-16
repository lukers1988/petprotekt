interface UserInterface {
    user: {
        token: string | null;
        firstName: string | null;
        lastName: string | null;
    };
    status: "idle" | "loading";
    error: string | null;
}

export default UserInterface