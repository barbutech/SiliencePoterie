import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../utils/firebase.util";

export namespace Firebase {
  export const AuthWithEmail = async (email: string, password: string) => await createUserWithEmailAndPassword(auth, email, password);
}