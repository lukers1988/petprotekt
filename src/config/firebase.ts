import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAODOqDDWMaCvK7jmbww_zzBXqND0S6iso",
    authDomain: "passwordkeeper-70a45.web.app"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);