// firebase components
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// constants
import * as ROLES from '../../constants/roles';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** Merge Auth and DB User API ***

    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();

                        // default empty roles
                        if (!dbUser.role) {
                            dbUser.role = "";
                        }

                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            ...dbUser,
                        };

                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

    checkInviteCode = code => {
        console.debug('Checking invite code in firebase : ' + code);
        console.debug('API Key : ' + process.env.REACT_APP_API_KEY);
        return this.db.ref(`invites`).orderByChild("value").equalTo(code).once('value').then(function(snapshot) {
            if (snapshot.exists()) {
                return ROLES.WEDDING;
            } else {
                return ROLES.GENERAL;
            }
        }, function(error) {
            return ROLES.GENERAL;
        });
    }

    deleteInviteCode = code => {
        console.debug('Deleting invite code from database : ' + code);
        var query = this.db.ref(`invites`).orderByChild("value").equalTo(code);
        query.once("value", function(snapshot) {
            snapshot.forEach(function(child) {
                child.ref.remove();
            })
        })
    }
}



export default Firebase;