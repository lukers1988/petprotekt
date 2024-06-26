import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfcfFGtStE4qKdsQIA_5UI3LeUZwQvozw",
    authDomain: "petprotekt.web.app"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);