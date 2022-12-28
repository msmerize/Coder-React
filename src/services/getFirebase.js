import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAy7b34n53wvZRmL9xqVYRSWz334MG5VE8",
    authDomain: "firecoder-martinsalvador.firebaseapp.com",
    databaseURL: "https://firecoder-martinsalvador-default-rtdb.firebaseio.com",
    projectId: "firecoder-martinsalvador",
    storageBucket: "firecoder-martinsalvador.appspot.com",
    messagingSenderId: "577870602819",
    appId: "1:577870602819:web:1e0d7a7d518a55cae92af6",
    measurementId: "G-6H1HPDFCZK"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => firebase.firestore(app)
