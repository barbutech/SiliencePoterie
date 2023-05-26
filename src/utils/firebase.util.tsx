import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASPHOEHh1scsBKO2gzHnMvCCR8n129QD8",
  authDomain: "siliencepoterie-3e0fd-a9306.firebaseapp.com",
  projectId: "siliencepoterie-3e0fd",
  storageBucket: "siliencepoterie-3e0fd.appspot.com",
  messagingSenderId: "960431294757",
  appId: "1:960431294757:web:a3c660627b151292e2f2cc",
  measurementId: "G-0G3XBVH0HM"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);