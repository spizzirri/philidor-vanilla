import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

class Firebase{
    #app;
    #db;

    constructor(configuration){
        this.#app = initializeApp(configuration);
        this.#db = getFirestore(this.#app);
    }

    async getData(collectionName) {

        const collectionReference = collection(this.#db, collectionName);
        const snapshot = await getDocs(collectionReference);
        const list = snapshot.docs.map(doc => doc.data());
        return list;
    }

}

export default Firebase;