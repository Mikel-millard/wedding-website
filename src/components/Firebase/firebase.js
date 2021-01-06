// firebase components
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// constants
import * as ROLES from '../../constants/roles';

const config = {
    apiKey: "AAAA2gXT3gA:APA91bFRY5o3oTl0SSGgFLxDj1S1EHLImd_f66sVmCBoEZXV9kFVDMd8SeUaMhbThgW5L5whHLU_wSMbnVprlCO_ny168A4W4pOyon6W811SBOG8VXP_WbQRIZARuTCoaujl_yxseUSr",
    authDomain: "wedding-website-react.firebaseapp.com",
    databaseURL: "https://wedding-website-react.firebaseio.com",
    projectId: "wedding-website-react",
    storageBucket: "wedding-website-react.appspot.com",
    messagingSenderId: "936400641536",
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