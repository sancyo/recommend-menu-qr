import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB2Rg1i5ZTXP_D4yAmNcdb_fN3ntqYvq80",
    authDomain: "recommend-menu-qr.firebaseapp.com",
    projectId: "recommend-menu-qr",
    storageBucket: "recommend-menu-qr.appspot.com",
    messagingSenderId: "187292135244",
    appId: "1:187292135244:web:0bafe50f5df515fbcbe9e9",
    measurementId: "G-GFYR3N026E"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
    firebase.analytics()
}

export const auth = firebase.auth
export default firebase