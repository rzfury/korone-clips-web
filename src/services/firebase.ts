import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

global.XMLHttpRequest = require('xhr2');

const config = {
  apiKey: "AIzaSyBRaI6bYViBnZpChZf6DJfocgCtDvH_mwM",
  authDomain: "rzfury-yt-frame.firebaseapp.com",
  databaseURL: "https://rzfury-yt-frame.firebaseio.com",
  projectId: "rzfury-yt-frame",
  storageBucket: "rzfury-yt-frame.appspot.com",
  messagingSenderId: "795570258602",
  appId: "1:795570258602:web:7f51bdad1d3a5a3fa6c6d3",
  measurementId: "G-11TT1F8ZF9"
};
const storageUrl = 'gs://rzfury-yt-frame.appspot.com';
const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

class Firebase {
  public db: firebase.firestore.Firestore;
  public storage: firebase.storage.Storage;

  constructor() {
    this.db = app.firestore();
    this.storage = app.storage(storageUrl);
  }

  public getSortLimit(collection: string, orderKey: string, limit: number = 0, direction: 'asc' | 'desc' = 'desc') {
    return new Promise(async (resolve, reject) => {
      let data: any = [];
      
      await this.db.collection(collection).orderBy(orderKey, direction).limit(limit).get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          data.push({
            id: doc.id,
            data: doc.data()
          });
        });
        resolve(data);
      })
      .catch(reject);
    });
  }

  public getSort(collection: string, orderKey: string, direction: 'asc' | 'desc' = 'desc') {
    return new Promise(async (resolve, reject) => {
      let data: any = [];
      
      await this.db.collection(collection).orderBy(orderKey, direction).get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          data.push({
            id: doc.id,
            data: doc.data()
          });
        });
        resolve(data);
      })
      .catch(reject);
    });
  }

  public getWhere(collection: string, where?: [string, firebase.firestore.WhereFilterOp, any]) {
    return new Promise(async (resolve, reject) => {
      let data: any = [];

      this.db.collection(collection).where(where[0], where[1], where[2]).get()
        .then((snapshot) => {
          snapshot.forEach(doc => {
            data.push({
              id: doc.id,
              data: doc.data()
            });
          });
          resolve(data);
        })
        .catch(reject);
    });
  }

  public get(collection: string, documentId?: string) {
    return new Promise(async (resolve, reject) => {
      let data: any = [];

      if (documentId) {
        this.db.collection(collection).doc(documentId).get()
          .then((snapshot) => {
            data.push({
              id: snapshot.id,
              data: snapshot.data()
            });
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      }
      else {
        this.db.collection(collection).get()
          .then((snapshot) => {
            snapshot.forEach(doc => {
              data.push({
                id: doc.id,
                data: doc.data()
              });
            });
            resolve(data);
          })
          .catch(reject);
      }
    });
  }

  public getFiles(folder?: string) {
    return new Promise(async (resolve, reject) => {
      const listRef = this.storage.ref(folder);
      const bucket = listRef.bucket;

      listRef.listAll()
        .then((res) => {
          let folders: firebase.storage.Reference[] = [];
          let files: firebase.storage.Reference[] = [];

          res.prefixes.forEach((ref) => folders.push(ref));
          res.items.forEach((ref) => files.push(ref));

          const urls = files.map((ref) => (`https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(ref.fullPath)}?alt=media`));
          const files2 = files.map((ref) => ({
            src: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(ref.fullPath)}?alt=media`,
            path: ref.fullPath,
          }));

          resolve({ folders, files: urls, files2 });
        })
        .catch(reject);
    });
  }
}

export default Firebase;
